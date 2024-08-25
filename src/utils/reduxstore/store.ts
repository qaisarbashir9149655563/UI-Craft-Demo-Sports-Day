import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

import { loadState, saveState } from "../localStorage";

const preloadedState = loadState("eventState");

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
  preloadedState: preloadedState ? { events: preloadedState } : undefined,
});
store.subscribe(() => {
  saveState("eventState", store.getState().events);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
