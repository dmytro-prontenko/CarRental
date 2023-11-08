import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../services/api";

export const getCarsThunk = createAsyncThunk(
  'user/registerThunk',
  async (_, thunkAPI) => {
    try {
      const response = await getCars();
      return response ;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  )