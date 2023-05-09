import { api } from "../../services/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const response = await api.get("/tasks");
  return response.data.tasks;
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (dataTask: { title: string; description: string }) => {
    const { title, description } = dataTask;
    const response = await api.post("/auth/register", {
      title,
      description,
      completed: false,
    });

    console.log(response);

    return response.data.tasks;
  }
);

export const updateTaskStatus = createAsyncThunk(
  "task/updateTaskStatus",
  async (taskData: {
    id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    checkboxValue: boolean | undefined;
  }) => {
    const { id, title, description, checkboxValue } = taskData;

    const response = await api.put(`/task/${id}`, {
      title,
      description,
      completed: !checkboxValue,
    });

    return response.data.tasks;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: number) => {
    const response = await api.delete(`/task/${id}`);

    return response.data.tasks;
  }
);
