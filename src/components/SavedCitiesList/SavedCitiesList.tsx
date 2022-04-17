import React from "react";

import Grid from "@mui/material/Grid";
import CityCard from "../CityCard/CityCard";

const SavedCitiesList: React.FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <CityCard
          windSpeed={6.5}
          humidity={65}
          tempMax={6}
          tempMin={6}
          feelsLike={7}
          city="London 1"
          country="GB"
          weatherDescription="clear sky"
          temp={9}
        />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <CityCard
          windSpeed={6.5}
          humidity={65}
          tempMax={6}
          tempMin={6}
          feelsLike={7}
          city="London 2"
          country="GB"
          weatherDescription="clear sky"
          temp={9}
        />
      </Grid>

      <Grid item xs={2} sm={4} md={4}>
        <CityCard
          windSpeed={6.5}
          humidity={65}
          tempMax={6}
          tempMin={6}
          feelsLike={7}
          city="London 3"
          country="GB"
          weatherDescription="clear sky"
          temp={9}
        />
      </Grid>

      <Grid item xs={2} sm={4} md={4}>
        <CityCard
          windSpeed={6.5}
          humidity={65}
          tempMax={6}
          tempMin={6}
          feelsLike={7}
          city="London 4"
          country="GB"
          weatherDescription="clear sky"
          temp={9}
        />
      </Grid>

      <Grid item xs={2} sm={4} md={4}>
        <CityCard
          windSpeed={6.5}
          humidity={65}
          tempMax={6}
          tempMin={6}
          feelsLike={7}
          city="London 5"
          country="GB"
          weatherDescription="clear sky"
          temp={9}
        />
      </Grid>
    </Grid>
  );
};

export default SavedCitiesList;
