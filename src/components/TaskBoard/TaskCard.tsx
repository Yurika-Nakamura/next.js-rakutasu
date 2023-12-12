import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";
import { ToDoItem, InProgressItem, InReviewItem, DoneItem } from './taskItem'

const TaskCard = ({ id, cardName }: { id: UniqueIdentifier, cardName: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
    let taskItem;
    switch (cardName) {
      case 'ToDo':
        taskItem = <ToDoItem />;
        break;
      case 'InProgress':
        taskItem = <InProgressItem />;
        break;
      case 'InReview':
        taskItem = <InReviewItem />;
        break;
      case 'Done':
        taskItem = <DoneItem />;
        break;
      default:
        taskItem = null;
        break;
    }
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition, marginBottom: '5px' }}
      {...attributes}
      {...listeners}
    >
      {taskItem}
    </div>
  );
};

export default TaskCard;