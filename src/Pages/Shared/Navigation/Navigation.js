import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logoutUser } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar sticky="top" sx={{ backgroundColor: "#69a6ed", boxShadow: "none" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                        DRONEAHSAN
                    </Typography>
                    <Typography>
                        <Button sx={{ color: "white" }}>Home</Button>
                        <Link to="/allproducts">
                            <Button sx={{ color: "white" }}>Products</Button>
                        </Link>
                        {
                            user.email && <Link to="/dashboard"><Button sx={{ color: "white" }}>Dashboard</Button></Link>
                        }
                        {
                            !user.email && <Link to="/login"><Button sx={{ color: "white" }}>Login</Button></Link>
                        }
                    </Typography>
                    {
                        user.email && <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
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
                            <MenuItem >{user.displayName}</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem onClick={logoutUser}>Logout</MenuItem>
                        </Menu>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
