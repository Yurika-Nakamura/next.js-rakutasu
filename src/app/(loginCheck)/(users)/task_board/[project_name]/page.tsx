'use client'
import {
    UniqueIdentifier,
    PointerSensor,
    KeyboardSensor,
    useSensors,
    useSensor,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
    closestCorners,
    DndContext,
    DragOverlay,
  } from "@dnd-kit/core";
  import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
  import { useState } from "react";
  import TaskBoard from '../../../../../components/TaskBoard/TaskBoard'
  import { Item } from '../../../../../components/TaskBoard/TaskItem'
  import { Grid } from '@chakra-ui/react'
  import TaskModalContainer from '../../../../../components/TaskBoard/TaskModalContainer'
  
export default function Page() {
  const [items, setItems] = useState<{
    [key: string]: string[];
  }>({
    ToDo: ["ゆりか", "もな", "太郎"],
    InProgress: ["花子", "二郎"],
    InReview: ["佐藤"],
    Done: [],
  });

  const [activeId, setActiveId] = useState<UniqueIdentifier>();

  const sensorsItem = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key: string) =>
      items[key].includes(id.toString())
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const id = active.id.toString();
    setActiveId(id);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    const id = active.id.toString();
    const overId = over?.id;

    if (!overId) return;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId.toString());

      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const id = active.id.toString();
    const overId = over?.id;

    if (!overId) return;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId.toString());

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };

  return (
    <div>
      <TaskModalContainer />
        <Grid templateColumns='repeat(4, 1fr)' gap={2} h='100%' w="100%" >
            <DndContext
                sensors={sensorsItem}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <TaskBoard
                id="ToDo"
                label="未対応"
                items={items.ToDo}
                />
                <TaskBoard
                id="InProgress"
                label="対応中"
                items={items.InProgress}
                />
                <TaskBoard
                id="InReview"
                label="確認中"
                items={items.InReview}
                />
                <TaskBoard
                id="Done"
                label="完了"
                items={items.Done}
                />
                <DragOverlay>{activeId ? <Item /> : null}</DragOverlay>
            </DndContext>
        </Grid>
    </div>
  );
  
}