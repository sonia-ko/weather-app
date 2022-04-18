import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { findCityInfo } from "../../store/actions/citiesThunks";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { setCurrentSearchResult } from "../../store/reducers/citiesSlice";

const AddCityForm: React.FC = () => {
  const [city, setCity] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const searchResult = useSelector(
    (state: RootState) => state.cities.currentSearchResult
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (city) {
      dispatch(findCityInfo(city));
      setCity("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    dispatch(setCurrentSearchResult(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ maxWidth: 500, mx: "auto", my: 15, p: 4, boxShadow: 3 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_City_London.jpg/640px-The_City_London.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Please enter the name of the city to check the current weather in it
          </Typography>
          <TextField
            sx={{ width: "100%", mt: 2 }}
            id="search-city"
            label="City"
            variant="outlined"
            ref={searchInputRef}
            onChange={handleChange}
            value={city}
          />

          <Typography
            sx={{ width: "100%", mx: 0 }}
            color={"primary"}
            variant="body1"
            component="p"
            textAlign="right"
          >
            {searchResult ? searchResult : " "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button type="submit" sx={{ width: "100%" }} size="large">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AddCityForm;
