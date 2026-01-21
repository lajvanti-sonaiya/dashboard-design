import { Card, Box, Typography } from "@mui/material";

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
        boxShadow: 1,
        borderTop: `3px solid ${color.main}`,
        height: "100%",

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
        <Box>
          {icon && (
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "12px",
                backgroundColor: color.light,
                color: color.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          )}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default StatsCard;
