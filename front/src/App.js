import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FoodIcon from '@material-ui/icons/LocalDining';

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App-header">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              CSA
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <BottomNavigation
          value={value}
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

export default App;
