"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colour";
import { BorderColor, Height } from "@mui/icons-material";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-outfit)",
    h1: {
      fontFamily: "var(--font-fraunces)",
    },
  },
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
        input: {
          padding: "10px 16px",
          font: "13px",
        },

        root: {
          backgroundColor: colors.white,
          borderRadius: "10px",

          "&:hover": {
            borderColor: colors.blue,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "12px",
          textTransform: "capitalize",

          [theme.breakpoints.up("sm")]: {
            padding: "6px 10px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            "& .MuiButton-startIcon": {
              marginRight: "10px",
              "& .MuiSvgIcon-root": {
                width: 15,
                height: 15,
              },
            },
          },
          [theme.breakpoints.up("md")]: {
            padding: "0px 20px",
            fontSize: "14px",
            "& .MuiButton-startIcon": {
              marginRight: "10px",
              "& .MuiSvgIcon-root": {
                width: 15,
                height: 15,
              },
            },
          },
        }),

        contained: {
          borderRadius: "10px",
          fontWeight: 600,
          background: colors.gradients,
          color: "#fff",
        },

        outlined: {
          padding: "0px",
          color: colors.secondary,
          background: colors.backgroundSecondary,
          borderColor: colors.gray.dark,
        },
      },
    },
  },
});
