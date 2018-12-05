import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Colheitas extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            // id_colheita: null,
        }
    }

    request = async() => {
        let response = await fetch('/colheitas',{
            method: 'POST',
            headers: {'Accept': 'application/json',
               'Content-Type': 'application/json'},
            body: JSON.stringify({
                // id_autor: this.props.user_id
            })
        });
        const futureJson = await response.json();
        this.setState({ data: futureJson });
    }
    
    componentWillMount() {
        this.request();
    }

    callbackColheita = (idColheita) => {
        this.props.callbackFromColheita(idColheita);
        //https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
    }

    deleteColheita = (idColheita) =>{
        console.log("Aqui a colheita será apagada!")
        //Aqui a colheita será apagada....
    }
    
    render(){
        var cards = [];
        var page = [];

        for (var i=0; i<this.state.data.length; i++){
            var colheita = this.state.data[i];
            var Sdados = JSON.stringify(colheita["detalhes_colheita"])
            var Jdados = JSON.parse(Sdados)

            for (var key in Jdados){
                var canteiros = "";
                for (var canteiro in Jdados[key]["canteiros_colhidos"]){
                    canteiros += Jdados[key]["canteiros_colhidos"][canteiro] + ", ";
                }
                canteiros = canteiros.substring(0, canteiros.length - 2);

                cards.push(<Grid item xs={3}>
                    <Card className={this.props.paper}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <b>{key}</b>
                                <Link to="./colheita/nova">
                                    <Button size="small" onClick={this.callbackColheita.bind(this, colheita["_id"])}>Editar</Button>
                                </Link>
                                <IconButton aria-label="Delete" onClick={this.deleteColheita.bind(this, colheita["_id"])}>
                                    <DeleteIcon />
                                </IconButton>
                            </Typography>
                            <Typography component="p">
                                <u><b>Deposito:</b></u> {Jdados[key]["deposito"]}
                                <br />
                                <u><b>Quantidade:</b></u> {Jdados[key]["quantidade"]} {Jdados[key]["unidade"]}
                                <br />
                                <u><b>Quantidade berços:</b></u> {Jdados[key]["quant_bercos"]}
                                <br />
                                <u><b>Mensagem:</b></u> {Jdados[key]["mensagem"]}
                                <br />
                                <u><b>Canteiros colhidos:</b></u> {canteiros}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>)
            }
        }
        
        page.push(<div>
            <div>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
                <h1>COLHEITAS</h1>
                <Link to="./colheita/nova">
                    <Button variant="fab" color="primary" aria-label="Add" onClick={this.callbackColheita.bind(this, null)}>
                        <AddIcon />
                    </Button>
                </Link>
            </Grid>
            </div>
            <div>
            <Grid container spacing={8}>
            <Grid container item xs={12} spacing={24}>
                    <React.Fragment>
                    {cards}
                    </React.Fragment>
                </Grid>
            </Grid>
            </div>
            </div>)

    return (<div>{page}</div>)}
}
