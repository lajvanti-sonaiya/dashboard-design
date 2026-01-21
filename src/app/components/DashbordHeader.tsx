"use client";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import IconBox from "./common/IconBox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { colors } from "../../mui/colour";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const DashbordHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
         flexDirection: {
            md: "column",
            lg: "row",
          },
        justifyContent: "space-between",
        alignItems: "start",
        gap:"10px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "16px",
              md: "20px",
              lg: "32px",
            },
            lineHeight: 0.8,
            fontWeight: 600,
          }}
        >
          Good morning,James
        </Typography>
        <Typography variant="caption">
          here what happing with your project today{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          placeholder="Search project , task..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />{" "}
        <IconBox colour={colors["gray"]} icon={<NotificationsActiveIcon />} />
        <Button variant="contained" startIcon={<AddIcon />}>
          {" "}
          New Project
        </Button>
      </Box>
    </Box>
  );
};

export default DashbordHeader;
