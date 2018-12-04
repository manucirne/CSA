import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormColheita from './FormColheita';

export default class Colheitas extends Component{
    constructor(props){
        super(props)
        this.state = { data: [] };
    }
    
    request = async() => {
        let response = await fetch('/colheitas',{
            method: 'POST',
            headers: {'Accept': 'application/json',
               'Content-Type': 'application/json'},
            body: JSON.stringify({})
        });
        const futureJson = await response.json();
        this.setState({ data: futureJson });
    }
    
    componentWillMount() {
        //this.request();
    }
    
    render(){
        var cards = [];
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
                            <b>{key}</b> {colheita["id_autor"]}
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

    return (
    <div>
        <div>
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
            <h1>COLHEITAS</h1>
            <Button variant="fab" color="primary" aria-label="Add">
                <AddIcon />
            </Button>
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
        <FormColheita></FormColheita>
    </div>
  )}
}
