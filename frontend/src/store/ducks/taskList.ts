import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTaskStatus,
} from "../fetchActions";

import { TaskType } from "../../@types/TaskType";

type InitialStateType = {
  loading: boolean;
  tasks: TaskType[];
  error: string | undefined;
};

const initialState: InitialStateType = {
  loading: false,
  tasks: {} as TaskType[],
  error: "",
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<TaskType[]>) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.tasks = [];
      state.error = action.error.message;
    });
    builder.addCase(createTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.loading = false;
      state.tasks = state.tasks;
      state.error = action.error.message;
    });
    builder.addCase(updateTaskStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTaskStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(updateTaskStatus.rejected, (state, action) => {
      state.loading = false;
      state.tasks = state.tasks;
      state.error = action.error.message;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = "";
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      state.tasks = state.tasks;
      state.error = action.error.message;
    });
  },
});

export const taskListReducer = taskListSlice.reducer;
export const taskListActions = taskListSlice.actions;

/* export const fetchTaskList = async () => {
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
}; */
