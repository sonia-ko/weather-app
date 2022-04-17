import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "a8c9152b3e7414954e714ff77a6dab4b";

export const fetchCities = createAsyncThunk("cities/fetch", async () => {
  try {
    const payload: any = [];
    // const payload = await api.getUsers();
    // return payload;
    return payload;
  } catch {
    window.alert("Failed to fetch cities");
  }
});

export const updateCity = createAsyncThunk("city/update", async (city) => {
  try {
    // const payload = await api.getUser(id);
    // return payload;
  } catch {
    window.alert("Failed to update a city");
  }
});

export const deleteCity = createAsyncThunk("city/delete", async (city) => {
  try {
    // const payload = await api.createUser(user);
    // return payload;
  } catch {
    window.alert("Failed to create user");
  }
});

export const findCityInfo = createAsyncThunk(
  "city/find",

  async (city: string) => {
    try {
      console.log(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const request = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
          }
        }
      );

      // if (!request.ok) {
      //   console.log(request.status);
      //   throw new Error(`${request.status}`);
      // }

      const data = await request.json();
      console.log(data);
    } catch {
      window.alert("Failed to find this city, please try another one");
    }
  }
);
