import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import { GridItem, Heading, Box } from '@chakra-ui/react'

const TaskBoard = ({
  id,
  items,
  label,
}: {
  id: string;
  items: string[];
  label: string;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <GridItem w='100%' h='100%' bg='white' borderRadius={4} px="5px" py={3} >
        <Heading as='h3' size='sm' mb={2} mx={2}>{label}</Heading>
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <Box ref={setNodeRef}>
            {items.map((item: string) => (
                <TaskCard key={item} id={item} cardName={id} />
            ))}
            </Box>
        </SortableContext>
    </GridItem>
  );
};

export default TaskBoard;