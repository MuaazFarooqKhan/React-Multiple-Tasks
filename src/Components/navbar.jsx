import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // Here I use two hooks useTheme & useMediaQuery hook from Material-UI to determine whether the screen size is smaller than medium
    const theme = useTheme(); 
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Here we verify whether it's a mobile view or a web view. */}
                {isMobile ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    // This ui is for the web view
                    <>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            React Test
                        </Typography>
                        <Button color="inherit"><Link to="/counterapp" style={{ textDecoration: 'none', color: 'inherit' }}>Counter App</Link></Button>
                        <Button color="inherit"><Link to="/reverse" style={{ textDecoration: 'none', color: 'inherit' }}>Reverse</Link></Button>
                        <Button color="inherit"><Link to="/weather" style={{ textDecoration: 'none', color: 'inherit' }}>Weather</Link></Button>
                    </>
                )}

                {/* This UI is for the mobile  view */}
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}><Link to="/counterapp" style={{ textDecoration: 'none', color: 'inherit' }}>Counter App</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}><Link to="/reverse" style={{ textDecoration: 'none', color: 'inherit' }}>Reverse</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}><Link to="/weather" style={{ textDecoration: 'none', color: 'inherit' }}>Weather</Link></MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
