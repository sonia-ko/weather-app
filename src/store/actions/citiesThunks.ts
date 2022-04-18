import { createAsyncThunk } from "@reduxjs/toolkit";
import formatDate from "../../helpers/dateFormatter";
import { City } from "../types/CitiesState";

const API_KEY = "a8c9152b3e7414954e714ff77a6dab4b";

interface ForecastAPIItem {
  dt_txt: string;
  main: {
    temp: number;
  };
}
const getCityInfo = async (city: string) => {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    if (!request.ok) {
      throw new Error(`${request.status}`);
    }

    const data = await request.json();
    const date = new Date();
    data.recordDate = formatDate(date);
    return data;
  } catch {
    window.alert("Failed to update a city");
  }
};

export const updateCity = createAsyncThunk(
  "city/update",
  async (city: string) => {
    const newCity = await getCityInfo(city);
    return newCity;
  }
);

export const fetchCities = createAsyncThunk(
  "cities/fetch",
  async (cities: City[]) => {
    let newCities = [];
    try {
      for (const city of cities) {
        const request = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`
        );
        if (!request.ok) {
          console.log(request.status);
          throw new Error(`${request.status}`);
        }

        const data = await request.json();
        const date = new Date();
        data.recordDate = formatDate(date);
        newCities.push(data);
      }
      return newCities;
    } catch {
      window.alert("Failed to fetch cities");
    }
    return cities;
  }
);

export const findCityInfo = createAsyncThunk(
  "city/find",

  async (city: string) => {
    const newCity = await getCityInfo(city);
    return newCity;
  }
);

export const getWeatherForecast = createAsyncThunk(
  "city/getForecast",

  async (city: string) => {
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      if (!request.ok) {
        throw new Error(`${request.status}`);
      }

      const data = await request.json();

      const arr = data.list.map((el: ForecastAPIItem) => {
        return { temp: Math.floor(el.main.temp), dt_txt: el.dt_txt };
      });

      const newObject = { selectedCity: city, items: arr };

      return newObject;
    } catch {
      window.alert("Failed to get forecast");
    }
  }
);
