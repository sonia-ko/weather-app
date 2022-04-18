import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CityCardProps from "./CityCardProps";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { deleteCity } from "../../store/reducers/citiesSlice";
import { updateCity } from "../../store/actions/citiesThunks";
import { useDispatch } from "react-redux";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const CityCard: React.FC<CityCardProps> = ({
  city,
  country,
  weatherDescription,
  temp,
  feelsLike,
  tempMin,
  tempMax,
  humidity,
  windSpeed,
  recordDate,
  id
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch(deleteCity(id));
  };

  const handleUpdate = () => {
    dispatch(updateCity(city));
  };

  return (
    <Box sx={{ my: 3 }}>
      <Card sx={{ boxShadow: 3, maxWidth: 345, mx: "auto", px: 2, py: 2 }}>
        <CardHeader title={`${city}, ${country}`} subheader={recordDate} />
        <CardMedia
          component="img"
          height="194"
          image={`https://countryflagsapi.com/png/${country}`}
          alt="Country flag"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Weather description: {weatherDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current temperature: {(temp - 273.15).toFixed(1)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleDelete} aria-label="delete city">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleUpdate} aria-label="share">
            <UpdateIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Feels like: {(feelsLike - 273.15).toFixed(1)}
            </Typography>
            <Typography paragraph>
              Minimum temperature: {(tempMin - 273.15).toFixed(1)}
            </Typography>
            <Typography paragraph>
              Maximum temperature: {(tempMax - 273.15).toFixed(1)}
            </Typography>
            <Typography paragraph>Humidity level: {humidity}</Typography>
            <Typography paragraph>Wind speed: {windSpeed}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default CityCard;
