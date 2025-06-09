import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSections: [],
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    toggleSection: (state, action) => {
      const index = state.selectedSections.indexOf(action.payload);
      if (index === -1) {
        state.selectedSections.push(action.payload);
      } else {
        state.selectedSections.splice(index, 1);
      }
    },
    clearSection: (state, action) => {
      state.selectedSections = [];
    },
  },
});

export const { toggleSection, clearSection } = sectionSlice.actions;
export default sectionSlice.reducer;
