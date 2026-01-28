"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import IconBox from "./common/IconBox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { colors } from "../../mui/colour";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useIsMobileOrTablet } from "@/mui/hooks/useIsMobileOrTablet";

const DashbordHeader = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs:0,
            lg:1
          },
          width: {
            xs: "100%",
            sm:"50%",
            lg: "50%",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "16px",
              md: "20px",
              lg: "32px",
            },
            fontWeight: 600,
          }}
        >
          Good morning,James
        </Typography>
        <Typography sx={{ fontSize: "14px" }} color="text.secondary">
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
        {isMobileOrTablet ? (
          <IconButton
            sx={{ background: colors.gradients, borderRadius: "10px" , color:colors.white  }}
          >
            <AddIcon />
          </IconButton>
        ) : (
          <Button variant="contained" startIcon={<AddIcon />}>
            New Project
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DashbordHeader;
