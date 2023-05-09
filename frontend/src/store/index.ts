import { configureStore } from "@reduxjs/toolkit";

import { taskListReducer } from "./ducks/taskList";
import { apiIsArrivedReducer } from "./ducks/apiIsArrived";

export const store = configureStore({
  reducer: {
    apiIsArrived: apiIsArrivedReducer,
    taskList: taskListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
