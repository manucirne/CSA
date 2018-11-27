import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import FoodIcon from '@material-ui/icons/LocalDining';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import Login from './Login.js'

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
          <Router>
            <div className="root">
              <AppBar position="static"  style={{ backgroundColor: 'rgba(89, 199, 75, 0.966)' }}>
                <Toolbar>
                  <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <HomeIcon />
                  </IconButton>

                    <Typography variant="h6" color="inherit" className="grow">
                        CSA
                    </Typography>
                    
                      <Button color="inherit">
                        <Link to="/login" style={{textDecoration:'none', color:'white'}}>Login</Link>
                      </Button>
                  
                </Toolbar>
              </AppBar>

              <BottomNavigation value={this.state.value} onChange={this.handleChange} showLabels>
                  <Link to="/" style={{textDecoration:'none'}}>
                    <BottomNavigationAction label="Informações" icon={<AssessmentIcon style={{color: 'rgba(82, 233, 62, 0.966)'}}/>} showLabel={true}/>
                  </Link>
                  
                  <Link to="/receitas" style={{textDecoration:'none'}}> 
                    <BottomNavigationAction label="Receitas" icon={<FoodIcon style={{color: 'rgba(82, 233, 62, 0.966)'}}/>} showLabel={true}/>
                  </Link>
              </BottomNavigation>

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/receitas" component={Receitas} />
            </div>
          </Router>  
        );
    }
}

function Home() {
  return (
    <div>
      <h2>FOI</h2>
    </div>
  );
}

function Receitas() {
  return (
    <div>
      <h2>OLHA O BOLOOOO</h2>
    </div>
  );
}
export default Header;
