import React from "react";
import { TaskType } from "../redux/slices/TasksSlice";
interface TaskFormProps {
  onTaskAdd: (task: TaskType) => void;
}
const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
  const [taskText, setTaskText] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTaskAdd({
      id: Date.now(),
      text: taskText,
      completed: false,
    });
    setTaskText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <input
        type="text"
        className="px-2 border h-10 w-800 "
        placeholder="Введите новую задачу"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-2 text-white bg-blue-400 rounded-lg ml-4 hover:bg-blue-500 transition duration-200 active:bg-blue-600"
      >
        Добавить
      </button>
    </form>
  );
};

export default TaskForm;
