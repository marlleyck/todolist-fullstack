import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api";

import { TaskType } from "../../@types/TaskType";

type InitialStateType = {
  taskList: TaskType[];
};

const initialState = {
  taskList: {} as TaskType[],
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<TaskType[]>) => {
      state.taskList = action.payload;
    },
  },
});

export const taskListReducer = taskListSlice.reducer;
export const taskListActions = taskListSlice.actions;

export const fetchTaskList = async () => {
  const response = await api.get("/tasks", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const createTask = async (title: string, description: string) => {
  await api.post("/auth/register", {
    title,
    description,
    completed: false,
  });

  const response = await api.get("/tasks");

  return response.data;
};

export const updateTaskStatus = async (
  id: number,
  title: string,
  description: string,
  checkboxValue: boolean
) => {
  const response = await api.put(`/task/${id}`, {
    title,
    description,
    completed: !checkboxValue,
  });

  return response.data;
};

export const deleteTask = async (id: number) => {
  await api.delete(`/task/${id}`);

  const response = await api.get("/tasks");

  return response.data;
};
