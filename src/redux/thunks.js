import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../services/api";
import { toast } from "react-toastify";

export const getCarsThunk = createAsyncThunk(
  "cars/getCarsThunk",
  async (params, thunkAPI) => {
    try {
      const response = await getCars(params);
      if (response.length) {
        return response;
      } else {
        throw new Error("You have reached the end. There are no more data.");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCarsByFilterThunk = createAsyncThunk(
  "cars/getCarsByFilterThunk",
  async (filterParams, thunkAPI) => {
    const { make, mileageFrom, mileageTo, price } = filterParams;
    let filterResultArray = [];
    // ---------------------Get all cars---------------------
    try {
      const response = await getCars(make);
      if (response.length) {
        filterResultArray.push(...response);
        // ---------- Filtering by fields-------------
        if (make) {
          filterResultArray = filterResultArray.filter(
            (car) => car.make === make
          );
        }
        if (price) {
          filterResultArray = filterResultArray.filter(
            (car) => +car.rentalPrice.split("$")[1] <= price
          );
        }
        if (mileageFrom) {
          filterResultArray = filterResultArray.filter(
            (car) => car.mileage >= mileageFrom
          );
        }
        if (mileageTo) {
          filterResultArray = filterResultArray.filter(
            (car) => car.mileage <= mileageTo
          );
        }
        console.log(filterResultArray.length)
        // ---------- Filter end-------------
        filterResultArray.length
          ? toast.success(`We found ${filterResultArray.length} car for you`) 
          : toast.error(
              `Unfortunately there are no cars matching  search criteria.`
            );
        return filterResultArray;
      } else {
        throw new Error("You have reached the end. There are no more data.");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
