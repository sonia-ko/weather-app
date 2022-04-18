import React from "react";

import Grid from "@mui/material/Grid";
import CityCard from "../CityCard/CityCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SavedCitiesList: React.FC = () => {
  const cities = useSelector((state: RootState) => state.cities.cities);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {cities.map((city) => {
        return (
          <Grid key={city.id} item xs={6} lg={4} sm={4} md={4}>
            <CityCard
              recordDate={city.recordDate}
              id={city.id}
              windSpeed={city.wind.speed}
              humidity={city.main.humidity}
              tempMax={city.main.temp_max}
              tempMin={city.main.temp_min}
              feelsLike={city.main.feels_like}
              city={city.name}
              country={city.sys.country}
              weatherDescription={
                city.weather.length > 0 ? city.weather[0].description : " "
              }
              temp={city.main.temp}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SavedCitiesList;
