import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};





class NavBar extends React.Component<{},{}>{
    state = {
        current_user: ""
    }
    componentDidMount(){
       this.setState((state)=>({
        current_user: localStorage.getItem("current_user")
       }))
    }
    render(): React.ReactNode {
    const { current_user } = this.state
    console.log(current_user)
    const { classes } = this.props
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={styles.grow}>
            News
          </Typography>
          { current_user ?
            <Button component={Link} to="/logout" variant="contained" color="primary">Logout</Button>
                     
          : 
            <Button component={Link} to="/login" variant="contained" color="primary">Login</Button>
            
          }
          { current_user ?
            
            <Button component={Link} to="/referrals/new" variant="contained" color="primary">New Referral</Button>     
          : 
          <Button component={Link} to="/signup" variant="contained" color="primary">Register</Button>
            
            
          }
        </Toolbar>
      </AppBar>
    )
}
}

export default withStyles(styles)(NavBar);
