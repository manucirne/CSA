import React, { Component } from 'react';
import FuzzyBar from './FuzzyBar';

export default class FormColheita extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            variedades: null,
        }
    }

    componentWillMount() {
        this.fetchData()
     }
 
     fetchData = async () => {
         let res = await fetch('http://68.183.103.175:5000/colheitas',{
             method: 'POST',
             headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
             body: JSON.stringify({
                 id_agricultor: '2'
             })
         })
         res = await res.json()
         console.log("Testando: ",res)
         //this.setState({variedades: res})
     }

    render(){
        return(<div>
            <p>Bora testar a bagui</p>
            <FuzzyBar variedades={this.state.variedades} ></FuzzyBar>
            </div>
        )
    }

}