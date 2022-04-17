import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CityCardProps from "./CityCardProps";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import formatDate from "../../helpers/dateFormatter";
// image={`https://countryflagsapi.com/png/${country}`}

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
  windSpeed
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const date = new Date();

  return (
    <Box sx={{ my: 3 }}>
      <Card sx={{ maxWidth: 345, mx: "auto", px: 2, py: 2 }}>
        <CardHeader
          title={`${city}, ${country}`}
          subheader={formatDate(date)}
        />
        <CardMedia
          component="img"
          height="194"
          image={`https://countryflagsapi.com/png/${country}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Weather description: {weatherDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current temperature: {temp}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete city">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share">
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
            <Typography paragraph>Feels like: {feelsLike}</Typography>
            <Typography paragraph>Minimum temperature: {tempMin}</Typography>
            <Typography paragraph>Maximum temperature: {tempMax}</Typography>
            <Typography paragraph>Humidity level: {humidity}</Typography>
            <Typography paragraph>Wind speed: {windSpeed}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default CityCard;
