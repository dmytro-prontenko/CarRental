import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./thunks";

const initialState = {
  cars: [],
  favoriteCars: [],
  filterValue: [],
  isLoading: false,
  isFiltered: false,
  page: 1,
  limit: 12,
  reachOut: false,
  modalId:null
};

export const carSlicer = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setModalId: (state, {payload}) => {
      state.modalId = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.page++;
        payload.length < 12 ? state.reachOut = true : state.reachOut = false;
      })
      .addCase(getCarsThunk.rejected, (state) => {
        state.reachOut = true;
      });
  },
});

export const carsReducer = carSlicer.reducer;
export const { setModalId } = carSlicer.actions;
