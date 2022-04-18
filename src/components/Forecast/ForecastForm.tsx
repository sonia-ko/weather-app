import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getWeatherForecast } from "../../store/actions/citiesThunks";
import { setSelectedCity } from "../../store/reducers/citiesSlice";

const ForecastForm: React.FC = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (city) {
      dispatch(getWeatherForecast(city));
      setCity("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    dispatch(setSelectedCity(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <Typography gutterBottom variant="body1" component="p">
          Please enter the name of the city to check the current weather in it
        </Typography>
        <TextField
          sx={{ width: "100%", mt: 2 }}
          id="search-forecast-city"
          label="City"
          variant="outlined"
          onChange={handleChange}
          value={city}
        />
      </CardContent>
      <CardActions>
        <Button type="submit" sx={{ width: "100%" }} size="large">
          Submit
        </Button>
      </CardActions>
    </form>
  );
};

export default ForecastForm;
