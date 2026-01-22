import { Box } from '@mui/material';
import React from 'react';
import { colors } from "../../../mui/colour";


const BoxContainer = ({children}:{children:React.ReactNode}) => {
    return (
        <Box sx={{borderRadius:4,backgroundColor: colors.white ,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.04)", padding:"24px"  ,minHeight:250 ,width:"100%",  height:"100%", border:`1px solid ${colors.borderColor}`}}>
            {children}
        </Box>
    );
}

export default BoxContainer;
