import * as React from 'react';
import {AppBar, IconButton, Menu, Toolbar, MenuItem, linkClasses} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


export default function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    size="large"
                    edge="start"
                    id="basic-button"
                    color="inherit"
                    aria-label="menu"
                    aria-haspopup="true"
                    aria-controls="basic-menu"
                    aria-expanded={open ? 'true' : null}
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    size="large"
                    edge="start"
                    sx={{ mr: 2 }}
                    onClick={handleClose}
                >
                    <Link to="add"><AddIcon /></Link>
                </IconButton>
            </Toolbar>
            <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/schedule"><MenuItem onClick={handleClose}>Schedule</MenuItem></Link>
            </Menu>
        </AppBar>
    );   
}