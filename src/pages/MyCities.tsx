import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SavedCitiesList from "../components/SavedCitiesList/SavedCitiesList";

import Typography from "@mui/material/Typography";

const MyCities: React.FC = () => {
  return (
    <>
      <Typography sx={{ my: 6 }} variant="h2" align="center">
        Saved cities
      </Typography>
      <SavedCitiesList />
    </>
  );
};

export default MyCities;
