import React from "react";
import { Box, Typography } from "@mui/material";

function HeroSection() {


    return(
        <Box className="snap" sx={{height:'90vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly',  color:'white'}}>
            <img src="images/logo.png" alt="logo" sx={{zIndex:'2'}} />
            <Typography>A premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC</Typography>
        </Box>
    )
}

export default HeroSection;