"use client";

import {
  Avatar,
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { colors } from "../../mui/colour";
import BoxContainer from "./common/BoxContainer";
import StatusChip from "./common/StatusChip";
const RecentProjectsTable = () => {
  const recentProjects = [
    {
      id: 1,
      name: "Brand Redesign",
      company: "Acme Corporation",
      // team: ["S", "M", "A"],
      team: [
        { name: "S", color: colors.orange.main },
        { name: "M", color: colors.blue.main },
        { name: "A", color: colors.purple.main },
      ],
      progress: 65,
      progressColor: colors.purple.main,
      status: "Active",
      statusColor: "success",
      deadline: "Jan 28, 2026",
      iconBg: colors.gradients,
    },
    {
      id: 2,
      name: "Mobile App v2.0",
      company: "TechStart Inc.",
      team: [
        { name: "M", color: colors.blue.main },
        { name: "A", color: colors.pink },
        { name: "A", color: colors.purple.main },
        { name: "S", color: colors.green.main },

        { name: "L", color: colors.purple.main },
      ],
      progress: 35,
      progressColor: colors.orange.main,
      status: "Pending",
      statusColor: "warning",
      deadline: "Feb 15, 2026",
      iconBg: colors.green.main,
    },
    {
      id: 3,
      name: "E-commerce Platform",
      company: "RetailMax",
      team: [
        { name: "A", color: colors.purple.main },
        { name: "S", color: colors.green.main },
        { name: "M", color: colors.blue.main },
      ],
      progress: 80,
      progressColor: colors.green.main,
      status: "Review",
      statusColor: "info",
      deadline: "Jan 22, 2026",
      iconBg: colors.pink,
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      company: "DataFlow Systems",
      team: [
        { name: "S", color: colors.orange.main },
        { name: "M", color: colors.red.main },
        { name: "A", color: colors.purple.main },
      ],
      progress: 40,
      progressColor: colors.purple.main,
      status: "Active",
      statusColor: "success",
      deadline: "Mar 05, 2026",
      iconBg: colors.orange.main,
    },
    {
      id: 5,
      name: "Analytics Dashboard",
      company: "DataFlow Systems",
      team: [
        { name: "S", color: colors.orange.main },
        { name: "M", color: colors.blue.main },
        { name: "A", color: colors.purple.main },
      ],
      progress: 40,
      progressColor: colors.purple.main,
      status: "Active",
      statusColor: "success",
      deadline: "Mar 05, 2026",
      iconBg: colors.orange.main,
    },
  ];

  return (
    <BoxContainer>
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Box
          sx={{
            display: "flex",

            flexDirection: {
              xs: "column",
              sm:"row",
              lg: "row",
            },
            justifyContent: "space-between",
            height: {
                xs: "50px",
                sm:"25px",
              lg: "25px",
            },
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Recent Projects
          </Typography>

          <Box display={"flex"} gap={1}>
            <Button variant="outlined">All</Button>
            <Button variant="outlined">All</Button>
            <Button variant="outlined">All</Button>
            <Button variant="outlined">All</Button>
          </Box>
        </Box>

        <TableContainer
          sx={{
            maxHeight: 320,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Table
            stickyHeader
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <TableHead sx={{ backgroundColor: colors.gray.main }}>
              <TableRow
                sx={{
                  padding: 1,
                }}
              >
                {["Project", "Team", "Progress", "Status", "Deadline"].map(
                  (h) => (
                    <TableCell
                      key={h}
                      sx={{
                        fontSize: 12,
                        color: "text.secondary",
                        backgroundColor: colors.gray.dark,
                        padding: "10px",
                        marginRight: "100px",
                      }}
                    >
                      {h.toUpperCase()}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>

            <TableBody sx={{}}>
              {recentProjects.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Box
                        sx={{
                          background: row.iconBg,
                          padding: 1,
                          fontSize: 14,
                          borderRadius: "20%",
                        }}
                      >
                        🎨
                      </Box>
                      <Box>
                        <Typography fontSize={13} fontWeight={600}>
                          {row.name}
                        </Typography>
                        <Typography fontSize={11} color="text.secondary">
                          {row.company}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box display="flex">
                      {row.team.slice(0, 4).map((member, i) => (
                        <Avatar
                          key={i}
                          sx={{
                            width: 26,
                            height: 26,
                            fontSize: 11,
                            ml: "-8.2px",
                            bgcolor: member.color,
                            color: colors.gray,
                            border: "2px solid white",
                            zIndex: 1,
                          }}
                        >
                          {member.name}
                        </Avatar>
                      ))}

                      {row.team.length > 4 && (
                        <Avatar
                          sx={{
                            width: 26,
                            height: 26,
                            fontSize: 11,
                            ml: "-8.2px",
                            bgcolor: "#E5E7EB",
                            color: "#374151",
                            border: "2px solid white",
                            zIndex: 1,
                          }}
                        >
                          +{row.team.length - 4}
                        </Avatar>
                      )}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      sx={{
                        height: 6,
                        borderRadius: 5,
                        backgroundColor: colors.gray.dark,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: row.progressColor,
                        },
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <StatusChip label={row.status} dot={true} />
                  </TableCell>

                  <TableCell>
                    <Typography fontSize={12}>{row.deadline}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </BoxContainer>
  );
};

export default RecentProjectsTable;
