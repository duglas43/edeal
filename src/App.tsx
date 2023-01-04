import React from "react";
import { Header, TaskForm, TaskList } from "./components/index";
import {
  addTask,
  deleteTask,
  editTask,
  TaskType,
} from "./redux/slices/TasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "./redux/slices/TasksSlice";
const App: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, status } = useSelector(selectTasks);
  const handleAddTask = (task: TaskType) => {
    dispatch(addTask(task));
  };
  const handleDeleteTask = (task: TaskType) => {
    dispatch(deleteTask(task));
  };
  const handleEditTask = (task: TaskType) => {
    dispatch(editTask(task));
  };
  const handleCompleteTask = (task: TaskType) => {
    dispatch(editTask(task));
  };
  return (
    <div className="App">
      <Header />
      <div className="container p-2 sm:p-0 mx-auto">
        <h1 className="text-3xl text-center mt-10">
          Добро пожаловать на сайт todo-системы Roga & Kopyta Inc
        </h1>

        <div className="mt-10  mx-auto">
          <TaskForm onTaskAdd={handleAddTask} />
          <TaskList
            tasks={tasks}
            status={status}
            onTaskDelete={handleDeleteTask}
            onTaskEdit={handleEditTask}
            onTaskComplete={handleCompleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
