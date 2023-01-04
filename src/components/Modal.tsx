import React from "react";
import { TaskType } from "../redux/slices/TasksSlice";
interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onTaskEdit: (task: TaskType) => void;
  taskToEdit: TaskType | null;
}
const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  onTaskEdit,
  taskToEdit,
}) => {
  const [taskText, setTaskText] = React.useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit.text);
    }
    inputRef.current.focus();
  }, [taskToEdit]);
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden={isModalOpen ? "false" : "true"}
      className={`fixed top-0 left-0 right-0 z-50  ${
        isModalOpen ? "" : "hidden"
      }  w-full p-4 overflow-x-hidden overflow-y-auto  h-modal h-full bg-black bg-opacity-50 flex items-center justify-center transition duration-300 ease-in-out`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Изменение задачи
            </h3>
            <button
              type="button"
              className="text-gray-400 transition bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <input
              ref={inputRef}
              className="px-2 border h-10 w-full"
              type="text"
              value={taskText}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white transition bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => {
                onTaskEdit({ ...taskToEdit, text: taskText });
                setIsModalOpen(false);
              }}
            >
              Изменить
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-gray-500 transition bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
