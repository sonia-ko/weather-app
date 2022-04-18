import { createTheme } from "@mui/material/styles";

const primaryFont = '"Hind Madurai", sans-serif';
const logoFont = "'Comfortaa', cursive";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  spacing: 4,

  palette: {
    primary: {
      main: "#1bab91"
    },
    secondary: {
      main: "#aee8d2"
    }
  },
  typography: {
    fontFamily: primaryFont,
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500,
      fontSize: 24,
      fontFamily: logoFont
    },
    h1: {
      fontWeight: 500,
      fontSize: 20,
      fontFamily: logoFont
    }
  }
});

export default theme;
