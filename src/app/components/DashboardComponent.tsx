import { Box } from "@mui/material";
import DashbordHeader from "./DashbordHeader";
import { colors } from "../../mui/colour";
import StatsCardData from "./statsCardData";
import ProjectPerformance from "./ProjectPerformance";
import TaskDistribution from "./TaskDistribution";
import RecentProjectsTable from "./RecentProject";

const DashboardComponent = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 3,
        backgroundColor: colors.background,
        minWidth: "945px",
        height: "100%",
      }}
    >
      <DashbordHeader />

      <StatsCardData />

      <Box
        sx={{ display: "flex", width: "100%", alignItems: "normal", gap: 2 }}
      >
        <Box sx={{ width: "55%" }}>
          {/* graph section  */}
          <ProjectPerformance />
        </Box>
        <Box sx={{ width: "45%" }}>
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
