import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/blue';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const NavBar = () => {
    // const theme = useTheme();
    return(
        <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography className="top-typography" variant="title" color="inherit" align="right">
                Ally
                </Typography>
            </Toolbar>
        </AppBar>

        </div>
    )
}
export default NavBar;