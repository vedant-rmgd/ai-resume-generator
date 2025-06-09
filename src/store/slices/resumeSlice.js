import { createSlice } from "@reduxjs/toolkit"

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    generatedText: "",
  },
  reducers: {
    setGeneratedResume: (state, action) => {
      state.generatedText = action.payload
    },
  },
})

export const { setGeneratedResume } = resumeSlice.actions
export default resumeSlice.reducer
