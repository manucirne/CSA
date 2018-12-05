import React, { Component } from 'react';
import './Login.css'
import logo from './img/csa-logo-p.png'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      username: "",
      passsword: "",
      _id: "",
      response: null,
      errorMessage: null
    }
  }

  login = async () => {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ errorMessage: 'Por favor coloque seu usuario e sua senha'})
    }

    else if (this.state.username === '' && this.state.password === '') {
      this.setState({ errorMessage: 'Por favor coloque seu usuario e sua senha'})
    }

    try {
      let response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
         })
      })
    
      let responseJson = await response.json()

      console.log("fhsdgdfg");
      console.log(responseJson);

      if (responseJson._id) {
        this.props.onLogin(responseJson)
        this.props.history.push('/')
      }

      else if (responseJson._id == null) {
        this.setState({ errorMessage: 'Usuário ou senha inválidos'})
      }

    } catch (error) {
      console.log(error)
    }    
  }



  render() {
    return (
      <div className="root">
        <hgroup>
            <h1>CSA</h1>
            <img src={logo} alt="logo"></img>
        </hgroup>

        <form>
          <div class="group">
            <input id="login" type="text"    onChange={(ev) => {
              this.setState({ username: ev.target.value })
            }}/><span class="highlight"></span><span class="bar"></span>

            <label>Usuário</label>
          </div>
          <div class="group">
            <input id="senha" type="email" onChange={(ev) => {
              this.setState({ password: ev.target.value })}} /><span class="highlight"></span><span class="bar"></span>
            <label>Senha</label>
          </div>
          {/* <Link to="/"> */}
            <Button type="button" class="button buttonBlue" onClick={this.login} >
              Confirmar
              <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </Button>
          {/* </Link> */}
          { this.state.errorMessage }
        </form>
      </div>
    );
  }
}

export default Login;
