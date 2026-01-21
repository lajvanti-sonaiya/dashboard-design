"use client";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex"     ,    minHeight: "100vh",
}}>
      {/* sideBar */}
      <Sidebar />

      {/* center dashboard */}
      <Box component="main" >
        {children}
      </Box>

      {/* right side bar */}
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box minWidth={280}>
        <RightBar />
      </Box>
    </Box>
  );
}
