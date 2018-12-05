import React, { Component } from 'react';
import FuzzyBar from './FuzzyBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router'



  const produtores = [
    {
      value: "Tenorio",
      label: "tenorio"
    },
    {
      value: "Barbinha",
      label: "Barbinha"
    },
    {
      value: "Bruto Rarturja",
      label: "bruto Rartuja"
    },
    {
      value: "Suoer power",
      label: "Super Power"
    }
  ];

  const variedades = [
      {
          value: "beterraba_id",
          label: "Beterraba"
      },
      {
          value: "chuchu",
          label: "chuchu"
      },
      {
        value: "belexa",
        label: "beleza"
      },
      {
          value:'Outro',
          label: "beleza"
      }
  ]

export default class FormColheita extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            variedades: null,
            toDashboard: false,
            name: 'tenorio',
        }
    }


    componentWillMount() {
        //this.fetchData()
     }



     submitForm = async (event) => {
      console.log(this.state.name);
      let nome = this.state.nome;
      let produtor = this.state.produtor;
      let data = this.state.data;
      let variedade = this.state.variedade;
      let n_bercos = this.state.n_bercos;
      let canteiros = this.state.canteiros;
      let n_colhido = this.state.n_colhido;
      let mensagem = this.state.mensagem;

        let formData = {
            // Tem que ter:
            // ID usuário - pegar do login
            //Pegar outros dados do form
            id_autor: "1",
            nome: nome,
            produtor: produtor,
            data: data,
            variedade: variedade,
            n_bercos: n_bercos,
            canteiros: canteiros,
            n_colhido: n_colhido,
            mensagem: mensagem
        }

        console.log(formData)
        let res = await fetch('/colheita/nova', //Acertar URI back
        {
            method: 'POST',
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        if(res.ok){
            this.setState({toDashboard: true})
        }
     }

     handleChange = name => event => {
        this.setState({
          [name]: event.target.value
        });
      };
 
     fetchData = async () => {
         let res = await fetch('/colheita',{ //ACERTAR API AGRICULTORES
             method: 'POST',
             headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
             body: JSON.stringify({
             })
         })
         res = await res.json()
         console.log("Testando: ",res)
         this.setState({
             variedades: res.variedades,
             produtores: res.produtores
        })
     }


    render(){
        if (this.state.toDashboard === true) {
            console.log(this.state.toDashboard)
            return <Redirect to='/colheita' />
          }else{
        return(<div>
            <form noValidate autoComplete="off">
            {/* Escolha do produtor *
                Data da colheita *
                Escolha da variedade *
                -- Horta --
                Quantos berços colhidos? 
                De quais canteiros colheu?
                -- Cotas --
                Quanto foi colhido?
                Unidade de medição
                --MENSAGEM ALEATORIA--
                */}
            <TextField
          id="produtor-select"
          select
          label="Produtor"
          value={this.state.produtor}
          onChange={this.handleChange("produtor")}
          SelectProps={{
            native: true
          }}
          helperText="Para qual produtor está colhendo?"
          margin="normal"
          variant="outlined"
        >
          {produtores.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

            <TextField
                id="date-colheita"
                label="Data da colheita"
                type="date"
                onChange={this.handleChange("data_colheita")}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
            />

            <TextField
          id="select-variedade"
          select
          label="Variedade"
          value={this.state.variedade}
          onChange={this.handleChange("variedade")}
          SelectProps={{
            native: true
          }}
          helperText="Qual variedade foi colhida?"
          margin="normal"
          variant="outlined"
        >
          {variedades.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>


        <TextField
                id="numero-bercos"
                label="Numero de berços colhidos"
                value={this.state.n_bercos}
                onChange={this.handleChange('n_bercos')}
                margin="normal"
                variant="outlined"
            />
        
        <TextField
                id="canteiros"
                label="De quais canteiros você colheu?"
                value={this.state.canteiros}
                onChange={this.handleChange('canteiros')}
                margin="normal"
                variant="outlined"
            />

        <TextField
            id="n_colhido"
            label="Quanto foi colhido?"
            helperText="Se não souber, deixe em branco"
            value={this.state.n_colhido}
            onChange={this.handleChange('n_colhido')}
            margin="normal"
            variant="outlined"
        />

        <TextField
            id="canteiros"
            label="Mensagem"
            helperText="Se quiser, escreva uma mensagem"
            value={this.state.mensagem}
            onChange={this.handleChange('mensagem')}
            margin="normal"
            variant="outlined"
            multiline
        /> 

        <Button
         variant="contained"
         color="primary"
         onClick={this.submitForm}>
        Enviar
        </Button>        
        </form>
            
        </div>
        )
    }
  }

}