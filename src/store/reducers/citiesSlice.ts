import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { CitiesState, City } from "../types/CitiesState";
import {
  fetchCities,
  updateCity,
  deleteCity,
  findCityInfo
} from "../actions/citiesThunks";
// import { fetchProducts } from "../actions/productsThunk";

const initialState: CitiesState = {
  cities: [],
  citiesFetched: false
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.citiesFetched = false;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.citiesFetched = true;
        state.cities = [...action.payload];
      })
      .addCase(updateCity.fulfilled, (state, action) => {
        // state.rolesFetched = true;
        // state.roles = state.roles.concat(action.payload);
      })

      .addCase(deleteCity.pending, (state, action) => {
        // state.usersFetched = false;
      })
      .addCase(findCityInfo.fulfilled, (state, action: PayloadAction) => {
        // state.usersFetched = true;
        // state.list = state.list.concat(action.payload);
      });
  }
});

// export const { deleteCity, updateCity } = citiesSlice.actions;
// export const selectCount = (state: RootState) => state.cities.currentPage;

export default citiesSlice.reducer;
