"use client";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import { colors } from "../../mui/colour";
import { Badge, Button } from "@mui/material";
import { Padding } from "@mui/icons-material";

const drawerWidth = 280;

export const MenuItems = [
  {
    section: "MAIN MENU",
    items: [
      {
        label: "Dashboard",
        icon: <DashboardIcon />,
        path: "/dashboard",
      },
      {
        label: "Projects",
        icon: <DashboardIcon />,
        path: "/project",
        notification: 10,
      },
      {
        label: "Calender",
        icon: <CalendarTodayIcon />,
        path: "/calendar",
      },
      {
        label: "Message",
        icon: <AssignmentIcon />,
        path: "/message",
        notification: 1,
      },
    ],
  },
  {
    section: "WORKSPACE",
    items: [
      {
        label: "Documents",
        icon: <CalendarTodayIcon />,
        path: "/document",
      },
      {
        label: "Analytics",
        icon: <CalendarTodayIcon />,
        path: "/analytics",
      },

      {
        label: "Settings",
        icon: <SettingsIcon />,
        path: "/settings",
      },
    ],
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: "20px",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <CssBaseline />
      <DrawerHeader
        sx={{ display: "flex", justifyContent: "start", padding: "24px" }}
      >
        {open ? (
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              justifyContent: "flex-start",
              justifyItems: "flex-start",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                height: "42px",
                width: "42px",
                fontSize: "20px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: colors.white,
                borderRadius: "12px",
                background: colors.gradients,
              }}
              //   onClick={handleDrawer}
            >
              N
            </Typography>
            <Typography
              sx={{
                background: colors.gradients,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
                fontSize: "22px",
              }}
            >
              Nexus
            </Typography>
          </Box>
        ) : (
          <Button
            variant="contained"
            sx={{ width: "auto", padding: 1, minWidth: "35px" }}
            // onClick={handleDrawer}
          >
            N
          </Button>
        )}

        {/* {open && (
            <IconButton onClick={handleDrawer}>
              <ChevronRightIcon />
            </IconButton>
          )} */}
      </DrawerHeader>

      <List sx={{ marginX: "10px" }}>
        <>
          {MenuItems.map((group) => (
            <Box key={group.section} sx={{ mb: 2 }}>
              {open && (
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "text.secondary",
                    px: 2,
                    mb: 1,
                  }}
                >
                  {group.section}
                </Typography>
              )}

              {group?.items.map((menu, index) => (
                <ListItem
                  key={menu.label}
                  disablePadding
                  sx={{ display: "block", color: colors.secondary ,}}
                >
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        // px: 2.5,
                        padding:"12px 16px" ,
                        ":hover": {
                          backgroundColor: colors.blue.light,
                          borderRadius: "10px",
                          color: colors.blue.main,
                          svg: {
                            color: colors.blue.main,
                          },

                          "&:hover::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            height: "50%",
                            width: "3px",
                            backgroundColor: colors.blue.main,
                          },
                        },
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                          marginRight: 1,
                          color: "text.secondary",
                        },
                      ]}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.label}
                      sx={{
                        "& .MuiTypography-root":{
                          fontSize:"14px",
                          fontWeight:600
                        },
                      
                        opacity: 1,
                        color: colors.textSecondary,
                      }}
                    />

                    {menu.notification && (
                      <Badge badgeContent={menu.notification} color="error" />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
        </>
      </List>

      <Box></Box>
    </Drawer>
  );
};

export default Sidebar;
