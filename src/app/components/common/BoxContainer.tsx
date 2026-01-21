import { Box } from '@mui/material';
import React from 'react';
import { colors } from "../../../mui/colour";


const BoxContainer = ({children}:{children:React.ReactNode}) => {
    return (
        <Box sx={{borderRadius:4,backgroundColor: colors.white ,boxShadow:2, padding:2  ,minHeight:250 ,width:"100%",  height:"100%"}}>
            {children}
        </Box>
    );
}

export default BoxContainer;
