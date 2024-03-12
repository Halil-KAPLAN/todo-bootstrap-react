import { FC } from "react";
import { ITask } from "./CreateTask";

interface TaskItemProps {
  id: number;
  task: ITask;
  onDelete: (taskId: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({ id, task, onDelete }) => {
  const { title, content } = task;

  return (
    <div className="col-md-4">
      <div className="contentDiv">
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
