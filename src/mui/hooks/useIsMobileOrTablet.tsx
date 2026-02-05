import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobileOrTablet = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};