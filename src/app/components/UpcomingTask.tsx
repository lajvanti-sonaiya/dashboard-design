"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
} from "@mui/material";
import BoxContainer from "./common/BoxContainer";
import { colors } from "../../mui/colour";
import StatusChip from "./common/StatusChip";
const UpcomingTask = () => {
  const tasks = [
    {
      id: 1,
      name: "Review design mockups",
      time: "Today, 2pm",
      chip: "Design",
      color: colors.purple,
    },
    {
      id: 2,
      name: "API integration testing",
      time: "Today, 4pm",
      chip: "Dev",
      color: colors.orange,
    },
    {
      id: 3,
      name: "Client presentation prep",
      time: "Today, 5:30pm",
      chip: "Urgent",
      color: colors.green,
    },
    {
      id: 4,
      name: "Sarah Mitchell",
      time: "Today, 2pm",
      chip: "Design",
      color: colors.purple,
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
          Upcoming Task
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
        {tasks.map((task, index) => (
          <ListItem sx={{ padding: 0, marginY: 2 }} key={task.id}>
            <Checkbox
              slotProps={{
                input: { "aria-label": "controlled" },
              }}
            />
            <Box>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
                    {task.name}
                  </Typography>
                }
              />
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <StatusChip label={task.chip} dot={false} />

                <Typography sx={{ fontSize: "10px", color: "text.secondary" }}>
                  {task.time}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </BoxContainer>
  );
};

export default UpcomingTask;
