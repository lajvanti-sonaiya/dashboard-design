import { Box } from "@mui/material";
import React from "react";
import Calender from "./Calender";
import { colors } from "../../mui/colour";
import QuickActions from "./QuickActions";
import TeamOnline from "./TeamOnline";
import RecentActivity from "./RecentActivity";
import UpcomingTask from "./UpcomingTask";

const RightBar = () => {
  return (
    <Box sx={{ backgroundColor: colors.backgroundSecondary, padding:"24px", display:"flex", flexDirection:"column",gap:"24px"}} >
      <Calender />
      <QuickActions/>
      <UpcomingTask/>
      <TeamOnline/>
      <RecentActivity/>
    </Box>
  );
};

export default RightBar;
