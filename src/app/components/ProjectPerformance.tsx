"use client";
import * as React from "react";

import { colors } from "../../mui/colour";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import BoxContainer from "./common/BoxContainer";

export const chartData = {
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series1: [40, 65, 45, 80, 60, 30, 20],
    series2: [30, 50, 60, 65, 70, 25, 15],
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    series1: [220, 300, 260, 280],
    series2: [200, 250, 240, 270],
  },
  year: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series1: [
      1200, 1500, 1400, 1800, 1700, 1600, 1750, 1900, 1850, 2000, 1950, 2100,
    ],
    series2: [
      1000, 1300, 1250, 1600, 1550, 1450, 1600, 1700, 1650, 1800, 1750, 1900,
    ],
  },
};

export default function ProjectPerformance() {
  const [view, setView] = React.useState<"week" | "month" | "year">("week");
  const data = chartData[view];

  return (
    <BoxContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
          ProjectPerformance{" "}
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, val) => val && setView(val)}
          size="small"
          sx={{
            mb: 2,
            backgroundColor: colors.backgroundSecondary,
            "& .MuiToggleButton-root": {
              textTransform: "capitalize",
              borderRadius: "6px !important",
              border: 0,
              margin: 0.5,
              padding: "2px 14px",
              "& .Mui-selected": {
                backgroundColor: colors.borderColor,
              },
            },
          }}
        >
          <ToggleButton value="week">Weekly</ToggleButton>
          <ToggleButton value="month">Monthly</ToggleButton>
          <ToggleButton value="year">Yearly</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <BarChart
        grid={{ horizontal: false }}
        margin={{ left: -10, right: 20, bottom: 30, top: 10 }}
        sx={{
          "& .MuiChartsLegend-root": {
            display: "none",
          },
        }}
        xAxis={[
          {
            data: data.labels,
            scaleType: "band",
            disableLine: true,
            disableTicks: true,

            sx: {
              width: "20px",
            },
          },
        ]}
        yAxis={[
          {
            disableLine: true,
            disableTicks: true,
            tickLabelStyle: {
              display: "none",
            },
          },
        ]}
        series={[
          {
            data: data.series1,
            label: "Completed",
            color: colors.purple.dark,
          },
          {
            data: data.series2,
            label: "Pending",
            color: colors.pink,
          },
        ]}
        height={220}
        borderRadius={8}
      />
    </BoxContainer>
  );
}
