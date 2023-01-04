import React from "react";
import { Task, Modal } from "./index";
import { TaskType } from "../redux/slices/TasksSlice";
interface TaskListProps {
  tasks: TaskType[];
  onTaskDelete: (task: TaskType) => void;
  onTaskEdit: (task: TaskType) => void;
  onTaskComplete: (task: TaskType) => void;
  status: "idle" | "loading" | "failed";
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  status,
  onTaskDelete,
  onTaskEdit,
  onTaskComplete,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = React.useState<TaskType | null>(null);
  return (
    <div className="mt-10 list-wrap">
      <ul className="list-inside list-decimal">
        {status === "idle" &&
          tasks.map((task: TaskType) => (
            <Task
              key={task.id}
              task={task}
              onTaskDelete={onTaskDelete}
              onTaskComplete={onTaskComplete}
              setIsModalOpen={setIsModalOpen}
              setTaskToEdit={setTaskToEdit}
            />
          ))}
      </ul>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onTaskEdit={onTaskEdit}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default TaskList;
