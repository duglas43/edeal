import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface TaskType {
  id: number;
  text: string;
  completed: boolean;
}
interface TasksSliceState {
  tasks: TaskType[];
  status: "idle" | "loading" | "failed";
}
const initialState: TasksSliceState = {
  tasks: [],
  status: "idle",
};
const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task: TaskType) => task.id !== action.payload.id
      );
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task: TaskType) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, editTask } = TasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks;
export default TasksSlice.reducer;
