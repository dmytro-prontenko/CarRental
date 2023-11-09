import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../services/api";

export const getCarsThunk = createAsyncThunk(
  'user/registerThunk',
  async (params, thunkAPI) => {
    try {
      const response = await getCars(params);
      if (response.length) {
        return response ;
      } else {
        throw new Error ('You have reached the end. There are no more data.')
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  )
