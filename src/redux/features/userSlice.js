import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios.get("https://randomuser.me/api/?results=35");
  return res.data.results;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
