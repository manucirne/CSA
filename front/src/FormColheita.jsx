import React, { Component } from 'react';
import FuzzyBar from './FuzzyBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';


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
          label: "outro"
      }
  ]

  const unidades = [
    {
        value: "kg",
        label: "Kg"
    },
    {
        value: "folhas",
        label: "folhas"
    },
    {
      value: "maços",
      label: "maços"
    },
    {
        value:'bacias',
        label: "bacias"
    }
]

export default class FormColheita extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            variedades: null,
            toDashboard: false,
            nome: 'tenorio',
            colheitas: null,
            produtor: null,
            data: null,
            variedade: null,
            n_bercos: null,
            mensagem: null,
            canteiros: null,
            n_colhidos: null,
            unidade: "",
        }
    }


    componentWillMount() {
        //this.fetchData();
        if(this.props.idColheita != null){
          this.fetchOldColheita();
        }
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
      let unidade = this.state.unidade;

        let formData = {
            // Tem que ter:
            // ID usuário - pegar do login
            //Pegar outros dados do form
            inserir: true,
            id_autor: "1",
            timestamp: null,
            data_colheita: data + "T12:00:00Z",
            id_agricultor: produtor,
            detalhes_colheita: {}
          }
        formData["detalhes_colheita"][variedade] = {
            deposito: "minha casa",
            quant_bercos: n_bercos,
            unidade: unidade,
            canteiros_colhidos: canteiros,
            quantidade: n_colhido,
            mensagem: mensagem
        }
        let method = "POST"
        if(this.props.idColheita != null){
          method = "PUT"
          formData["_id"] = this.props.idColheita
        }
        console.log(formData)
        let res = await fetch('/colheitas', //Acertar URI back
        {
            method: method,
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

      fetchOldColheita = async () => {
        let id_colheita = this.props.idColheita;
        console.log(id_colheita)
        let response = await fetch('/colheitas',{
          method: 'POST',
          headers: {'Accept': 'application/json',
             'Content-Type': 'application/json'},
          body: JSON.stringify({
              _id : id_colheita
          })
      });
      const futureJson = await response.json();
      this.setState({ colheitas: futureJson });
      
        for (var i=0; i<this.state.colheitas.length; i++){
          var colheita = this.state.colheitas[i];
          var Sdados = JSON.stringify(colheita["detalhes_colheita"])
          var Jdados = JSON.parse(Sdados)

          for (var key in Jdados){
            this.state.variedade = console.log(key)
            this.state.n_bercos =  Jdados[key]["quant_bercos"]
            this.state.canteiros = Jdados[key]["canteiros_colhidos"]
            this.state.n_colhido = Jdados[key]["quantidade"]
            this.state.mensagem = Jdados[key]["mensagem"]

            this.setState({
              variedade: key,
              nome: 'tenorio',
              n_bercos: Jdados[key]["quant_bercos"],
              mensagem: Jdados[key]["mensagem"],
              canteiros: Jdados[key]["canteiros_colhidos"],
              n_colhidos: Jdados[key]["quantidade"],
          })
          }
        }
      }
 
     fetchData = async () => {   
        let res = await fetch('/agricultores',{ //ACERTAR API AGRICULTORES
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
            native: false
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
                id="data_colheita"
                label="Data da colheita"
                type="date"
                onChange={this.handleChange("data")}
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
            native: false
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
          id="select-unidade"
          select
          label="Unidade"
          value={this.state.unidade}
          onChange={this.handleChange("unidade")}
          SelectProps={{
            native: false
          }}
          helperText="qual a unidade?"
          margin="normal"
          variant="outlined"
        >
          {unidades.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

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
          
        {/* <Link to="./colheita"> */}
          <Button
          variant="contained"
          color="primary"
          onClick={this.submitForm}>
          Enviar
          </Button>
        {/* </Link> */}
        </form>
            
        </div>
        )
    }
  }

}