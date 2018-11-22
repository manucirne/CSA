import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FoodIcon from '@material-ui/icons/LocalDining';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    state = {
        value: 0
    };

    handleChange = (event, value) => {
    this.setState({ value });
    };

    render(){
        return(
        <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="grow">
              CSA
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
        >
        <BottomNavigationAction label="Informações" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Receitas" icon={<FoodIcon />} />
      </BottomNavigation>
      </div>
        );
    }
}

export default Header;
