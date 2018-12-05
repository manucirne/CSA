// @ts-check
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import FoodIcon from '@material-ui/icons/LocalDining';
import FlorIcon from '@material-ui/icons/FilterVintage';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './Home.css';
import Login from './Login.js'
import Colheita from './Colheitas'
import Nova from './FormColheita'
import Dash from './Dash.js'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          user_id: null,
          user_name: null,
        }
    }

    handleChange = (event, value) => {
    this.setState({ value });
    };

    render(){

      // Funcoes provisórias de login (pessoal do login pode mudar aqui pra fazer o login funcionar com back)
      const LogIn = () =>{
        this.setState({user_id:true})
      }
      const logInFunction = () =>{
        return(
          <Login stateFunction={LogIn} />
        )
      }
  
      const checkLogInColheita = () =>{
        if(this.state.user_id){
          return(
            <Colheita user_name={this.state.user_name} data={this.state.data} />
        )}
        return(
          <Redirect to={{pathname: '/login'}}/>
        )    
    }
    const dashing = () =>{
      return(
      <Dash id={null}></Dash>
      )
    }

        return(
          <Router>
            <div className="root">
              <AppBar position="static"  style={{ backgroundColor: 'rgba(89, 199, 75, 0.966)' }}>
                <Toolbar>
                  <Link to="/" style={{textDecoration:'none', color:'white'}}>
                    <IconButton className="menuButton" color="inherit" aria-label="Menu">
                      <HomeIcon />
                    </IconButton>
                  </Link>
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

                  <Link to="/colheita" style={{textDecoration:'none'}}> 
                    <BottomNavigationAction label="Colheita" icon={<FlorIcon style={{color: 'rgba(82, 233, 62, 0.966)'}}/>} showLabel={true}/>
                  </Link>
              </BottomNavigation>

            <Route exact path="/" component={dashing} />
            <Route path="/login" component={logInFunction} />
            <Route path="/receitas" component={Receitas} />
            <Route exact path="/colheita" component={checkLogInColheita} />
            <Route path="/colheita/nova" component={Nova} />
            </div>
          </Router>  
        );
    }
}

function Receitas() {
  return (
    <div>
      <h2>OLHA O BOLOOOO</h2>
    </div>
  );
}
export default Home;
