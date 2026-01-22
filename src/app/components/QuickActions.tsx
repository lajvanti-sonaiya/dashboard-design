import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import BoxContainer from "./common/BoxContainer";
import IconBox from "./common/IconBox";
import { colors } from "../../mui/colour";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EmailIcon from "@mui/icons-material/Email";

const actions = [
  { label: "New task", color: colors.blue, icon: <AddIcon /> },
  { label: "Add member", color: colors.purple, icon: <PersonAddAltIcon /> },
  { label: "Upload File", color: colors.green, icon: <FileUploadIcon /> },
  { label: "Send Email", color: colors.orange, icon: <EmailIcon /> },
];

const QuickActions = () => {
  return (
    <BoxContainer>
      <Typography sx={{ fontSize: "14px", fontWeight: 700, mb: 3 }}>
        Quick Actions
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {actions.map((action, index) => (
          <Grid size={6} key={index}>
            {" "}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <IconBox colour={action.color} icon={action.icon} />
              {action.label && (
                <Typography sx={{ fontSize: "12px" }} color="secondary">
                  {action.label}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </BoxContainer>
  );
};

export default QuickActions;
