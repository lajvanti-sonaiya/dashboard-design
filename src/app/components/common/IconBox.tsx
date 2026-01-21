import { Box, IconButton } from "@mui/material";
import React from "react";


type ColorType = {
  light: string;
  main: string;
  dark: string;
};

interface IconBoxProps {
  icon: React.ReactNode;
  colour: ColorType;
  onClick?: () => void;
}
const IconBox = ({ icon, colour }: IconBoxProps) => {
  return (
    <Box sx={{ backgroundColor: colour.light , borderRadius:2, width:"fit-content" }}>
      <IconButton sx={{color:colour.main}}>{icon}</IconButton>
    </Box>
  );
};

export default IconBox;
