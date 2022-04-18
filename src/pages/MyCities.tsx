import React from "react";
import SavedCitiesList from "../components/SavedCitiesList/SavedCitiesList";

import Typography from "@mui/material/Typography";

const MyCities: React.FC = () => {
  return (
    <>
      <Typography sx={{ my: 6 }} variant="h5" align="center">
        Saved cities
      </Typography>
      <SavedCitiesList />
    </>
  );
};

export default MyCities;
