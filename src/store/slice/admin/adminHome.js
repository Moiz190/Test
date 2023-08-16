import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodoList = createAsyncThunk(
  "adminHome/fetchTodos",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data
  }
);
const initialState = {
  todo: [],
};
const adminHomeSlice = createSlice({
  name: "adminHome",
  initialState,
  reducers: {
    resetAdminHome(state) {
      state.todo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.todo = action.payload;
    });
  },
});
export default adminHomeSlice.reducer;
export const { resetAdminHome } = adminHomeSlice.actions;
