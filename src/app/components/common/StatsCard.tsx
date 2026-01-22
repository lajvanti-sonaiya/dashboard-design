import { Card, Box, Typography } from "@mui/material";
import IconBox from "./IconBox";
import { colors } from "../../../mui/colour";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: any;
}

const StatsCard = ({ title, value, icon, color }: StatsCardProps) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: "14px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
        height: "100%",
        position: "relative",
        ":before": {
          background: color.main,
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconBox colour={color} icon={icon} />

          <Typography
            sx={{
              borderRadius: "6px",
              padding: "4px 8px",
              backgroundColor: colors.green.light,
              color: colors.green.main,
              margin: "10px",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            ↑ 10%
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
            }}
            color="text.secondary"
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default StatsCard;
