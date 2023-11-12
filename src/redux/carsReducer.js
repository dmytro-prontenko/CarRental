import { createSlice } from "@reduxjs/toolkit";
import { getCarsByFilterThunk, getCarsThunk } from "./thunks";

const initialState = {
  cars: [],
  favoriteCars: [],
  filteredCars: [],
  isLoading: false,
  isLoadingSearchForm: false,
  page: 1,
  limit: 12,
  reachOut: false,
  modalId: null,
  modalMenuStatus: false,
  location:null,
};

export const carSlicer = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setModalId: (state, { payload }) => {
      state.modalId = payload;
    },
    toggleModalMenu: (state) => {
      state.modalMenuStatus = !state.modalMenuStatus;
    },
    setEmptyCarsList: (state) => {
      state.cars = [];
      state.page = 1;
    },
    setReachOut: (state, { payload }) => {
      state.reachOut = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favoriteCars = payload;
    },
    addFavorites: (state, { payload }) => {
      state.favoriteCars.push(payload);
    },
    setFilteredCars: (state, { payload }) => {
      state.filteredCars = payload;
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.filteredCars = [];
        state.page++;
        (state.isLoading = false),
          payload.length < 12
            ? (state.reachOut = true)
            : (state.reachOut = false);
      })
      .addCase(getCarsThunk.rejected, (state) => {
        state.reachOut = true;
        state.isLoading = false;
      })
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCarsByFilterThunk.fulfilled, (state, { payload }) => {
        state.filteredCars = [];
        state.filteredCars.push(...payload);
        state.isLoadingSearchForm = false;
      })
      .addCase(getCarsByFilterThunk.pending, (state) => {
        state.isLoadingSearchForm = true;
      })
      .addCase(getCarsByFilterThunk.rejected, (state) => {
        state.isLoadingSearchForm = false;
      });
  },
});

export const carsReducer = carSlicer.reducer;
export const {
  setModalId,
  setEmptyCarsList,
  setReachOut,
  setFavorites,
  addFavorites,
  toggleModalMenu,
  setFilteredCars,
  setLocation,
} = carSlicer.actions;
