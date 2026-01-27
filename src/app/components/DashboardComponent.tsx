"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import DashbordHeader from "./DashbordHeader";
import { colors } from "../../mui/colour";
import StatsCardData from "./statsCardData";
import ProjectPerformance from "./ProjectPerformance";
import TaskDistribution from "./TaskDistribution";
import RecentProjectsTable from "./RecentProject";

const DashboardComponent = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        // padding: "24px 32px",
        padding:isMobileOrTablet ? "60px 32px" : "24px 32px",
        backgroundColor: colors.background,
        width: {
          md: "500px",
          lg: "auto",
        },
        minWidth: {
          lg: "1213px",
        },
        height: "100%",
      }}
    >
      <DashbordHeader />

      <StatsCardData />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
          },
          width: "100%",
          alignItems: "normal",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: "65%",
            },
          }}
        >
          {/* graph section  */}
          <ProjectPerformance />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: "45%",
            },
          }}
        >
          {/* pie chart section */}
          <TaskDistribution />
        </Box>
      </Box>

      <Box>
        <RecentProjectsTable />
      </Box>
    </Box>
  );
};

export default DashboardComponent;
