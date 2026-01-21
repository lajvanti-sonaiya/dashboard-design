"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colour";


export const theme = createTheme({
  palette: {
    primary: {
      main: colors.main,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      secondary: colors.secondary,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          borderRadius: "10px",
          ":hover": {
            borderColor: colors.main,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "10px",
          fontWeight:600,
          background: colors.gradients,
          color: "#fff",
        },
      },
    },
  },
});
