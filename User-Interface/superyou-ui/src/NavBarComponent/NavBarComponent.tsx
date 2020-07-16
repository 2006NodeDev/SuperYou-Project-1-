import React, { FunctionComponent } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//JSS 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBarComponent:FunctionComponent<any> = (props) =>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);};
    const handleClose = () => {
    setAnchorEl(null);
    }
    return(
    <nav>
        <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
          </IconButton> 
          <Menu id="simple-menu" 
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          <Typography variant="h6" className={classes.title}>
            SUPER YOU
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </nav>
      
    )
}