import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./slices/sectionSlice";
import formReducer from "./slices/formSlice";
import resumeReducer from "./slices/resumeSlice"

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    form: formReducer,
    resume: resumeReducer,
  },
});
