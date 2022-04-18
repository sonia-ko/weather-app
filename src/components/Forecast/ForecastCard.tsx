import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ForecastForm from "./ForecastForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const useStyles = makeStyles({
  forecastItem: {
    width: "50px",
    height: "50px",
    margin: "0 2px",
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid #45a191",
    position: "absolute",

    "&:hover": {
      color: "#cfb8b8"
    }
  }
});

const ForecastCard: React.FC = () => {
  const forecastItems = useSelector(
    (state: RootState) => state.cities.selectedForecast
  );

  const selectedCity = useSelector(
    (state: RootState) => state.cities.selectedCity
  );

  const minTemp =
    forecastItems.length > 0
      ? forecastItems.reduce((prev, current) => {
          return prev.temp < current.temp ? prev : current;
        })
      : { temp: 0 };

  const classes = useStyles();
  return (
    <Card sx={{ boxShadow: 3, maxWidth: 800, mx: "auto", my: 5 }}>
      <ForecastForm />

      <CardActionArea sx={{ my: 2, mx: 3 }}>
        {forecastItems.length > 0 ? (
          <>
            {" "}
            <Typography variant="h5">
              Weather forecast in {selectedCity}
            </Typography>
            <Typography variant="body1">
              *hover over the temperature to see the exact time
            </Typography>{" "}
          </>
        ) : (
          " "
        )}

        <CardContent
          sx={{
            height: 230,
            mx: 1,
            position: "relative",
            my: "auto",
            overflowX: "scroll"
          }}
        >
          {forecastItems.length > 0
            ? forecastItems.map((el, i) => {
                const marginTop = el.temp - minTemp.temp;
                const tempInCelcius = el.temp - 273.15;
                return (
                  <div
                    style={{
                      bottom: `${marginTop}0px`,
                      left: `${i * 60}px`,
                      marginBottom: "1rem"
                    }}
                    key={selectedCity + el.dt_txt}
                    className={classes.forecastItem}
                  >
                    <Tooltip sx={{ width: 50, mx: "auto" }} title={el.dt_txt}>
                      <Typography
                        color="primary"
                        align="center"
                        sx={{ width: 50, mx: "auto" }}
                      >
                        {tempInCelcius.toFixed(1)}
                      </Typography>
                    </Tooltip>
                  </div>
                );
              })
            : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ForecastCard;
