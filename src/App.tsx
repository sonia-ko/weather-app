import React from "react";

import "./App.css";
import MyCities from "./pages/MyCities";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/my-cities" element={<MyCities />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
