"use client";

import { Card, Box, Typography, Button } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { colors } from "../../mui/colour";
import BoxContainer from "./common/BoxContainer";
const TaskDistribution = () => {
  const taskDistributionData = [
    { id: 0, value: 35, label: "Design", color: colors.pink },
    { id: 1, value: 25, label: "Development", color: colors.purple.main },
    { id: 2, value: 20, label: "Marketing", color: colors.orange.main },
    { id: 3, value: 15, label: "Research", color: colors.green.main },
  ];
  const totalTasks = 357;

  return (
    <BoxContainer>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "24px",
          }}
        >
          <Typography fontWeight={600}>Task Distribution</Typography>
          <Button>View All</Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
              lg: "row",
            },
            gap: 3,
          }}
        >
          <PieChart
            width={200}
            height={200}
            hideLegend={true}
            series={[
              {
                innerRadius: 70,
                outerRadius: 100,
                paddingAngle: 0,
                cornerRadius: 0,
                data: taskDistributionData,
              },
            ]}
          />

          <Box
            sx={{
              position: "absolute",
              left: {
                sm: "145px",
                md:"185px",
                lg: "72px",
              },
              top: {
                xs: "140px",
                sm: "135px",
                mg:"150px",
                lg: "120px",
              },
              textAlign: "center",
            }}
          >
            <Typography fontWeight={700} fontSize="22px">
              {totalTasks}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: "11px" }}
            >
              Total Tasks
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            {taskDistributionData.map((item) => (
              <Box
                key={item.id}
                display="flex"
                alignItems="center"
                gap="10px"
                mb={1.2}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "25%",
                    backgroundColor: item.color,
                    mr: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{ minWidth: 90, fontSize: "12px" }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", fontWeight: 600 }}
                >
                  {item.value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default TaskDistribution;
