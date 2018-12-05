// @ts-check
import React, { Component } from 'react';
import './Dash.css';
import { Link, Element , Events, animateScroll as scroller } from 'react-scroll'
import Pie from './Pie';
import Chart from './Chart';

class Dash extends Component {

  // Initialize data for use
  constructor(props){
    super(props);
    this.state = {
      kg_user:{},
      alimentos_user:{},
      kg_geral:{},
      alimentos_geral:{}

      
    }
  }


  async callApi_general(){
    let res = await fetch('/colheitas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})

    res = await res.json()
    //parsing json
    let Sres = JSON.stringify(res);
    let Jres = JSON.parse(Sres)


    var quantidade_colhida = 0;
    var quantidade_bercos = 0;
    let nome_alimentos = []
    const quant_alimentos = []
    for (var i = 0; i <Jres.length; i++){
      var colheita = Jres[i];
      var Sdados = JSON.stringify(colheita["detalhes_colheita"])
      var Jdados = JSON.parse(Sdados)
      for (var k in Jdados){
        //geral
        quantidade_colhida += parseFloat(Jdados[k]["quantidade"]);
        quantidade_bercos += parseFloat(Jdados[k]["quant_bercos"]);
        //alimentos geral
        if (nome_alimentos.indexOf(k) < 0) {
          nome_alimentos.push(k)
          quant_alimentos.push(parseFloat(Jdados[k]["quantidade"]))
          }
        else{
          var j = nome_alimentos.indexOf(k)
          quant_alimentos[j] += parseFloat(Jdados[k]["quantidade"])
          }
      }
    }


    var kg_geral = {
      labels: ['Total (kg)', 'Berços'],
      datasets:[
        {
          data:[
            quantidade_colhida,
            quantidade_bercos
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ]
        }
      ]
    }

    var alimentos_geral = {
      labels: nome_alimentos,
      datasets:[
        {label:'Kg',
          data:quant_alimentos ,
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 100, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
          ]
        }
      ]
    }
    return [kg_geral,alimentos_geral]
  }
    


  // Handle's API response for user
  async callApi_user(id){
    let res = await fetch('/colheitas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_autor: id
      })
    })

    res = await res.json()
    //parsing json
    let Sres = JSON.stringify(res);
    let Jres = JSON.parse(Sres)

    var quantidade_colhida = 0;
    var quantidade_bercos = 0;
    let nome_alimentos = []
    const quant_alimentos = []
    for (var i = 0; i <Jres.length; i++){
      var colheita = Jres[i];
      var Sdados = JSON.stringify(colheita["detalhes_colheita"])
      var Jdados = JSON.parse(Sdados)
      for (var k in Jdados){
        //geral
        quantidade_colhida += parseFloat(Jdados[k]["quantidade"]);
        quantidade_bercos += parseFloat(Jdados[k]["quant_bercos"]);
        //alimentos geral
        if (nome_alimentos.indexOf(k) < 0) {
          nome_alimentos.push(k)
          quant_alimentos.push(parseFloat(Jdados[k]["quantidade"]))
          }
        else{
          var j = nome_alimentos.indexOf(k)
          quant_alimentos[j] += parseFloat(Jdados[k]["quantidade"])
          }
      }
    }


    var kg_user = {
      labels: ['Total (kg)', 'Berços'],
      datasets:[
        {
          data:[
            quantidade_colhida,
            quantidade_bercos
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
          ]
        }
      ]
    }

    var alimentos_user = {
      labels: nome_alimentos,
      datasets:[
        {label:'Kg',
          data:quant_alimentos ,
          backgroundColor:[
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 100, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
          ]
        }
      ]
    }
    return [kg_user,alimentos_user]
  }





  // Calls Api and set State
  async componentWillMount(){
    var id = "1"
    //var id = this.props.id ---pessoal do login tem que passar id como props
    
    //chama todas colheitas feitas
    var data_user  = await this.callApi_user(id)
      this.setState({ kg_user:data_user[0] , alimentos_user:data_user[1]})
    // caso haja id(usuário está logado), chama as colheitas feitas pelo usuário
    if(id !== null){
      var data_geral  = await this.callApi_general()
      this.setState({ kg_geral:data_geral[0] , alimentos_geral:data_geral[1]})
    }
  }

  //front
  componentDidMount(){
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
  
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
      
    });
  }
//front
  scrollTo() {
    // @ts-ignore
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }






  render () {
    var id = "1"
    //var id = this.props.id ---pessoal do login tem que passar id como props
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
  
                <li><Link activeClass="active" className="GraphGeral" to="GraphGeral" spy={true} smooth={true} duration={500} >Colheita por alimento CSA</Link></li>
                {id !== null && <li><Link activeClass="active" className="GraphEsp_1" to="GraphEsp_2" spy={true} smooth={true} duration={500}>Colheita por alimento Usuário</Link></li>}
                <li><Link activeClass="active" className="GraphEsp_2" to="GraphEsp_1" spy={true} smooth={true} duration={500} >Temporada de Colheita CSA</Link></li>
                {id !== null && <li><Link activeClass="active" className="GraphEsp_3" to="GraphEsp_3" spy={true} smooth={true} duration={500} >Temporada de Colheita Usuário</Link></li>}

              </ul>
            </div>
          </div>
        </nav>
  
        <Element name="GraphGeral" className="element" >
        Colheita por alimento CSA
        <div className="App">
          <Pie alimentos={this.state.alimentos_geral}/>
        </div>
        </Element>
        
        {id !== null && 
        <Element name="GraphEsp_2" className="element">
        Colheita por alimento Usuário 
        <div className="App">
          <Pie alimentos={this.state.alimentos_user}/>
        </div>
        </Element>}
        
        <Element name="GraphEsp_1" className="element">
        Temporada de Colheita CSA
        <div className="App">
          <Chart kg={this.state.kg_geral}/>
        </div>
        </Element>

        {id !== null &&
        <Element name="GraphEsp_3" className="element">
        Temporada de Colheita Usuário
        <div className="App">
          <Chart kg={this.state.kg_user}/>
        </div>
        </Element>}

     

      </div>

);


}
};

export default Dash;