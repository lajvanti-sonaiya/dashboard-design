import { Box } from "@mui/material";
import DashboardComponent from "./components/DashboardComponent";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Box>
      <Layout>
        <DashboardComponent />
      </Layout>
    </Box>
  );
}
