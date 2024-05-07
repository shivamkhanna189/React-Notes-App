import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice"
const appStore = configureStore({
  reducer: {
    note: notesSlice,
  },
});

export default appStore;
