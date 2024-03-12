import { FC, useState } from "react";

export type ITask = {
  title: string;
  content: string;
};

interface CreateTask {
  onAdd: (task: ITask) => void;
}

const CreateTask: FC<CreateTask> = ({ onAdd }) => {
  const INITIAL_TASK: ITask = {
    title: "",
    content: "",
  };

  const [task, setTask] = useState<ITask>(INITIAL_TASK);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setTask((prevTask) => ({ ...prevTask, [e.target.name]: e.target.value }));

  const submitTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAdd(task);
    setTask(INITIAL_TASK);
  };

  return (
    <div className="createTaskForm">
      <form>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          className="form-control mb-3"
          rows={3}
          onChange={handleChange}
          value={task.content}
          placeholder="Write any To Do"
        ></textarea>
        <button className="btn btn-primary" onClick={submitTask}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
