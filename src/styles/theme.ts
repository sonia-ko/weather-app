import { createTheme } from "@mui/material/styles";

// font-family: 'Comfortaa', cursive;
// font-family: 'Hind Madurai', sans-serif;
// font-family: 'Lobster', cursive;
// const font = "'Quicksand', sans-serif";

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
    background: {
      default: "#59f7d2"
    },
    primary: {
      main: "#1bab91"
    },
    secondary: {
      main: "#59f7db"
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
    button: {
      color: "#0f0f0f"
    },
    h1: {
      fontWeight: 500,
      fontSize: 20,
      fontFamily: logoFont,
      color: "#0f0f0f"
    }
  }
});

export default theme;
