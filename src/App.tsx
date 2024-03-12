import { useState } from "react";
import "./App.css";
import CreateTask, { ITask } from "./components/CreateTask";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import Footer from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (newTask: ITask): void => setTaskList([...taskList, newTask]);
  const deleteTask = (taskId: number): void =>
    setTaskList(taskList.filter((_task, index) => index !== taskId));
  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {taskList.map((task: ITask, i: number) => (
            <TaskItem task={task} id={i} key={i} onDelete={deleteTask} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
