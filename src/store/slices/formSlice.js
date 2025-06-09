import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {}, // stores data for each selected section
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { section, field, value } = action.payload;
      if (!state.formData[section]) {
        state.formData[section] = {};
      }
      state.formData[section][field] = value;
    },
  },
});

export const { updateFormField } = formSlice.actions
export default formSlice.reducer