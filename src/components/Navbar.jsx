import { Box, Button, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const sections = ['Home', 'Introduction', 'Time Line', 'Prices', 'QnA'];

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "transparent", 
});

function Navbar() {

const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
    return(
        <Box
            sx={{
                background: 'transparent',
                color: 'white',
                position: 'fixed',
                width: '100%',
                top: '0',
                zIndex: '1000',
            }}
        >
            <StyledToolbar>
                <Typography variant="h6" sx={{color:'gold'}}>ReidXtreme 4.0</Typography>
                <Box sx={{display:{xs:'none', sm:'flex'}}}>
                    {sections.map((section) =>(
                        <Button 
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior (like page reloading)
                                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                            }} 
                            key={section} 
                            sx={{my:2, color: 'white', display: 'block', transition:'color 0.2s', '&:hover':{color:'gold'}}}>
                            {section}
                        </Button>
                    ))}
                </Box>
                <Box sx={{display:{xs:'block', sm:'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{color:'gold'}}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        >
                        {sections.map((page) => (
                            <MenuItem 
                                key={page}
                                sx={{
                                    background: 'black',
                                    color: 'white',

                                    }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(page).scrollIntoView({ behavior: 'smooth' });
                                    handleCloseNavMenu();
                                }}>
                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>
            </StyledToolbar>
        </Box>
    )
}

export default Navbar;