import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import { Grid } from "@mui/material";
import StatsCard from "./common/StatsCard";
import { colors } from "../../mui/colour";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const StatsCardData = () => {
  const statsCardData = [
    {
      title: "Total Tasks",
      value: 357,
      icon: <TaskAltIcon />,
      color: colors.purple,
    },
    {
      title: "Completed",
      value: 124,
      icon: <CheckCircleIcon />,
      color: colors.green,
    },
 
    {
      title: "Team Members",
      value: 18,
      icon: <PeopleIcon />,
      color: colors.blue,
    },
       {
      title: "Pending",
      value: 42,
      icon: <WatchLaterIcon />,
      color: colors.orange,
    },
  ];

  return (
    <Grid container spacing={2 }>
      {statsCardData.map((item, index) => (
    <Grid  size={{ xs: 12, md:6 ,lg:3 }}  key={index}>
          <StatsCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCardData;
