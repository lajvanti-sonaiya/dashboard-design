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
    <Box sx={{ backgroundColor: colour.light , borderRadius:"12px", width:"44px", height:"44px", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <IconButton sx={{color:colour.main}}>{icon}</IconButton>
    </Box>
  );
};

export default IconBox;
