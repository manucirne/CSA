import React, { Component } from 'react';
import './Login.css'
import logo from './img/csa-logo-p.png'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Login extends Component {

  render() {
    return (
      <div className="root">
        <hgroup>
            <h1>CSA</h1>
            <img src={logo} alt="logo"></img>
        </hgroup>

        <form>
          <div class="group">
            <input type="text"/><span class="highlight"></span><span class="bar"></span>
            <label>Usuário</label>
          </div>
          <div class="group">
            <input type="email"/><span class="highlight"></span><span class="bar"></span>
            <label>Senha</label>
          </div>
          <Link to="/">
            <Button type="button" class="button buttonBlue" onClick={this.props.stateFunction} >
              Confirmar
              <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
