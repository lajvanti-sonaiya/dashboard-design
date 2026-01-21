"use client";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colour";
import { Height } from "@mui/icons-material";

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
        root: ({ theme }) => ({
          padding: "4px 8px",
          fontSize: "8px",

          [theme.breakpoints.up("sm")]: {
            padding: "6px 10px",
            fontSize: "8px",
            whiteSpace: "nowrap",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              "& .MuiSvgIcon-root": {
                width: 15,
                height: 15,
              },
            },
          },
          [theme.breakpoints.up("md")]: {
            padding: "8px 18px",
            fontSize: "14px",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
             "& .MuiSvgIcon-root": {
                width: 20,
                height: 20,
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
      },
    },
  },
});
