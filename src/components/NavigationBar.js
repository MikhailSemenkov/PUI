import React from 'react';
import {Grid, AppBar, Typography, IconButton, Menu, MenuItem, Divider }from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = ({ navigate, user, onLogout }) => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: user? '/tasks' : '/login', label: 'Tasks' },
        { path: '/about', label: 'About' },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <AppBar position="fixed" alignItem="center">
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <IconButton size='large' disabled='true'></IconButton>
            <Typography variant="h6" color="inherit" component="div" align="center" onClick={() => navigate('/')}>
                TodoApp
            </Typography>
            <IconButton
                size='large'
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {navItems.map(item => (
                    <MenuItem onClick={() => navigate(item.path)}>{item.label}</MenuItem>
                ))}
                <Divider />
                {user? (
                    <div>
                        <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                        <MenuItem onClick={onLogout}>Logout</MenuItem>
                    </div>
                ) : (
                    <div>
                        <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
                        <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>
                    </div>
                )}
            </Menu>
        </Grid>
    </AppBar>
}

export default NavigationBar;