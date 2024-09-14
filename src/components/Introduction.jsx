import { Box, Typography } from "@mui/material";
import React from "react";

export default function Introduction() {
    return (
        <Box id='Introduction' sx={{height:'100vh', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center', color:'white', padding:'10%', boxSizing:'border-box', textAlign:'center'}}>
            <Typography variant="h3">Introduction</Typography>
            <Typography variant="h6">ReidXtreme 4.0 is the premier competitive programming hackathon organized by the IEEE Student Branch of UCSC in collaboration with the ACM Student Chapter of UCSC. This event is designed to elevate the competitive programming skills of undergraduate students, preparing them for the tech industry's competitive demands. ReidXtreme 4.0 consists of two rounds: an initial qualifying round and a final round.</Typography>
        </Box>
    );
}