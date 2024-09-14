import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return(
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #00000000 5%, #FF8C00AA 50%)',
                color: 'white',
                width: '100%',
                zIndex: '1000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
        <Box
            sx={{
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10px 10px 0',
            }}
        >
            <img src="images/logo.png" alt="logo" style={{height:'5rem', flexBasis:'0'}}/>
            <a href="https://ucscieee.lk/#/" style={{flexBasis:'0'}}><img src="images/IEEE.png" alt="logo" style={{height:'5rem'}}/></a>
            <Box>
                <Typography variant="h6">IEEE UCSC</Typography>
                <hr />
                <Typography variant="p">011-2224448</Typography>
                <br />
                <Typography variant="p">No. 35, Reid Avenue, Colombo 07</Typography>
                <Box sx={{display:'flex', justifyContent:'flex-start', gap:1, margin:'10px 0', width:'100%'}}>
                    <a href="https://www.facebook.com/IEEE.UCSC"><img src="images/facebook.png" alt="logo" style={{height:'2rem'}}/></a>
                    <a href="https://www.instagram.com/ucsc.ieee/"><img src="images/instagram.png" alt="logo" style={{height:'2rem'}}/></a>
                    <a href="https://www.linkedin.com/company/ieee-student-branch-ucsc/"><img src="images/linkedin.png" alt="logo" style={{height:'2rem'}}/></a>
                </Box>
            </Box>
        </Box>
        <Typography variant="body1" sx={{textAlign:'center', margin: 3}}>© 2024 - All Rights Reserved.</Typography>
        </Box>
    )
}