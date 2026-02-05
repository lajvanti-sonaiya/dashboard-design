import {
  Box,
  Typography,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Button,
} from "@mui/material";
import BoxContainer from "./common/BoxContainer";
import { colors } from "../../mui/colour";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: "Sarah",
      action: "commented on",
      target: "new design draft",
      project: "Dashboard",
      time: "5 mins ago",
      initials: "S",
      color: colors.orange.main,
    },
    {
      id: 2,
      user: "Mike",
      action: " completed task",
      target: "APi end ponit setup",
      project: "UI Kit",
      time: "12 mins ago",
      initials: "M",
      color: colors.green.main,
    },
    {
      id: 3,
      user: "Alex",
      action: "completed",
      target: "E-commerce Platform",
      project: "Platform",
      time: "1 hour ago",
      initials: "A",
      color: colors.blue.main,
    },
    {
      id: 4,
      user: "Alex",
      action: "completed",
      target: "E-commerce Platform",
      project: "Platform",
      time: "1 hour ago",
      initials: "A",
      color: colors.red.main,
    },
    {
      id: 5,
      user: "Alex",
      action: "completed",
      target: "E-commerce Platform",
      project: "Platform",
      time: "1 hour ago",
      initials: "A",
      color: colors.orange.main,
    },
  ];

  return (
    <BoxContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          Recent Activity
        </Typography>
        <Button>View All</Button>
      </Box>

      <List
        sx={{
          p: 0,
          maxHeight: "180px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {" "}
        {activities.map((activity, index) => (
          <ListItem
            key={activity.id}
            sx={{
              padding: 0,
              alignItems: "flex-start",
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: activity.color,
                  width: 36,
                  height: 36,

                  fontWeight: 600,
                }}
              >
                {activity.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "12px" }}>
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {activity.user}
                  </Box>{" "}
                  {activity.action}{" "}
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {activity.target}
                  </Box>
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: "8px" }}>
                  {activity.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </BoxContainer>
  );
};

export default RecentActivity;
