import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./thunks";

const initialState = {
  cars: [],
  favoriteCars: [],
  filterValue: [],
  isLoading: false,
  isFiltered: false,
};

export const carSlicer = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getCarsThunk.fulfilled, (state, {payload})=>{
      state.cars = payload
    })
  },
});

export const carsReducer = carSlicer.reducer;
