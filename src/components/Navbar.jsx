import { AppBar, Box, Button, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const sections = ['Home', 'Time Line', 'Prices'];

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
        <Box sx={{background: 'transparent', color: 'white', position:'sticky'}}>
            <StyledToolbar>
                <Typography variant="h6">ReidXtreme</Typography>
                <Box sx={{display:{xs:'none', sm:'flex'}}}>
                    {sections.map((section) =>(
                        <Button key={section} sx={{my:2, color: 'white', display: 'block'}}>{section}</Button>
                    ))}
                </Box>
                <Box sx={{display:{xs:'block', sm:'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
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
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
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