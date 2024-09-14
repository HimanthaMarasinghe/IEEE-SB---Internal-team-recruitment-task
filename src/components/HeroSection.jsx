import React from "react";
import { Box, Typography } from "@mui/material";

function HeroSection() {


    return(
        <Box id='Home' sx={{height: 'calc(100vh - 50px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly',  color:'white'}}>
            <img style={{width:'90%'}} src="images/logo.png" alt="logo" />
            <Typography variant="h5" sx={{textAlign:'center', margin: 5, transition:'color 0.2s', '&:hover':{color: 'gold'}}}>A premier competitive programming hackathon by the IEEE Student Chapter of UCSC</Typography>
        </Box>
    )
}

export default HeroSection;