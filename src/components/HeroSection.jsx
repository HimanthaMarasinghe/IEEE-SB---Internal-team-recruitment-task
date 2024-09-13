import React from "react";
import { Box, Typography } from "@mui/material";

function HeroSection() {


    return(
        <Box sx={{height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white', zIndex:'2'}}>
            <img src="images/logo.png" alt="logo" sx={{zIndex:'2'}} />
            <Typography>A premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC</Typography>
        </Box>
    )
}

export default HeroSection;