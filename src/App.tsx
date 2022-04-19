import React from "react";

import "./App.css";
import MyCities from "./pages/MyCities";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "./store/actions/citiesThunks";
import ForecasePage from "./pages/ForecastPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("cities");
    if (saved) {
      const initialValue = JSON.parse(saved);
      dispatch(fetchCities(initialValue));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/my-cities" element={<MyCities />} />
            <Route path="/forecast" element={<ForecasePage />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
