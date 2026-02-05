import { Box, Typography } from "@mui/material";
import { colors } from "../../../mui/colour";


const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Active: { bg: colors.green.light, color: colors.green.main },
  Pending: { bg: colors.orange.light, color: colors.orange.main },
  Review: { bg: colors.blue.light, color: colors.blue.main },
  Urgent: { bg: colors.red.light, color: colors.red.main },
  Design: { bg: colors.purple.light, color: colors.purple.main },
  Dev: { bg: colors.blue.light, color: colors.blue.main },
};

interface StatusChipProps {
  label: string;
  dot: boolean;
}

const StatusChip = ({ label, dot }: StatusChipProps) => {
  const style = STATUS_STYLES[label];

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px",
        borderRadius: "6px",
        backgroundColor: style.bg,
        gap: 0.5,
      }}
    >
      {dot && (
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: style.color,
          }}
        />
      )}

      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          color: style.color,
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default StatusChip;
