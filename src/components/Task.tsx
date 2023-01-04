import React from "react";
import { TaskType } from "../redux/slices/TasksSlice";
interface TaskProps {
  task: TaskType;
  onTaskDelete: (task: TaskType) => void;
  onTaskComplete: (task: TaskType) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskToEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
}
const Task: React.FC<TaskProps> = ({
  task,
  onTaskDelete,
  onTaskComplete,
  setIsModalOpen,
  setTaskToEdit,
}) => {
  return (
    <li>
      <div className="custom-checkbox flex items-center justify-between border p-2 w-full">
        <input
          id={"task-" + task.id}
          className="form-checkbox h-4 w-4 custom"
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            onTaskComplete({ ...task, completed: !task.completed });
          }}
        />
        <label htmlFor={"task-" + task.id} className="text-gray-700 ">
          {task.text}
        </label>
        <div className="flex">
          <button
            className="ml-auto bg-red-400 hover:bg-red-500 transition text-white font-bold py-1 px-4 rounded-lg"
            type="button"
            onClick={() => {
              onTaskDelete(task);
            }}
          >
            Delete
          </button>
          <button
            className="ml-2 bg-blue-400 hover:bg-blue-500 transition text-white font-bold py-1 px-4 rounded-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setIsModalOpen(true);
              setTaskToEdit(task);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
