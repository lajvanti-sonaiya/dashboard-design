"use client";

import {
  styled,
  Theme,
  CSSObject,
  useTheme,
} from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Button,
  IconButton,
  Drawer as MuiDrawer,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

import { colors } from "../../mui/colour";

const drawerWidth = 280;
export const MenuItems = [
  {
    section: "MAIN MENU",
    items: [
      { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
      {
        label: "Projects",
        icon: <DashboardIcon />,
        path: "/project",
        notification: 10,
      },
      { label: "Calender", icon: <CalendarTodayIcon />, path: "/calendar" },
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
      { label: "Documents", icon: <CalendarTodayIcon />, path: "/document" },
      { label: "Analytics", icon: <CalendarTodayIcon />, path: "/analytics" },
      { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
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
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  ...theme.mixins.toolbar,
}));

const DesktopDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const drawerContent = (
    <>
      <CssBaseline />

      <DrawerHeader>
        {open ? (
          <Box display="flex" gap={1.5} alignItems="center">
            <Box
              sx={{
                height: 42,
                width: 42,
                borderRadius: 2,
                background: colors.gradients,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              N
            </Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 22,
                background: colors.gradients,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Nexus
            </Typography>
          </Box>
        ) : (
          <Button variant="contained">N</Button>
        )}
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
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {!isMobile && (
        <DesktopDrawer variant="permanent" open={open}>
          {drawerContent}
        </DesktopDrawer>
      )}

      {isMobile && (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawerContent}
        </MuiDrawer>
      )}
    </>
  );
}