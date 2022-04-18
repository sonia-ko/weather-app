import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CitiesState, City } from "../types/CitiesState";
import {
  fetchCities,
  getWeatherForecast,
  updateCity,
  findCityInfo
} from "../actions/citiesThunks";

const localStorageKey = "cities";

const initialState: CitiesState = {
  cities: [],
  citiesFetched: false,
  currentSearchResult: "",
  selectedCity: "",
  selectedForecast: []
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCurrentSearchResult(state, action: PayloadAction<string>) {
      state.currentSearchResult = action.payload;
    },
    setSelectedCity(state, action: PayloadAction<string>) {
      state.selectedCity = action.payload;
    },
    deleteCity(state, action: PayloadAction<number>) {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
      if (state.cities.length > 0) {
        localStorage.setItem(localStorageKey, JSON.stringify(state.cities));
      } else {
        localStorage.removeItem(localStorageKey);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.citiesFetched = false;
      })
      .addCase(fetchCities.fulfilled, (state, action: any) => {
        state.cities = action.payload;
      })
      .addCase(updateCity.fulfilled, (state, action) => {
        const oldCityIndex = state.cities.findIndex(
          (city) => city.id === action.payload.id
        );
        let newCities = [...state.cities];
        newCities[oldCityIndex] = action.payload;
        state.cities = newCities;
        console.log(`city ${action.payload.name} updated`);
      })
      .addCase(findCityInfo.pending, (state, action) => {
        state.currentSearchResult = "";
      })
      .addCase(getWeatherForecast.fulfilled, (state, action) => {
        state.selectedCity = action.payload?.selectedCity || "";
        state.selectedForecast = action.payload?.items || [];
      })
      .addCase(findCityInfo.fulfilled, (state, action: PayloadAction<City>) => {
        if (state.cities.some((el) => el.name === action.payload.name)) {
          state.currentSearchResult = `${action.payload.name} is already added`;
        } else {
          const newCities = [action.payload, ...state.cities];
          state.cities = newCities;
          state.currentSearchResult = `${action.payload.name} was added to My Cities section`;
          localStorage.setItem(localStorageKey, JSON.stringify(newCities));
        }
      });
  }
});

export const { setCurrentSearchResult, deleteCity, setSelectedCity } =
  citiesSlice.actions;

export default citiesSlice.reducer;
