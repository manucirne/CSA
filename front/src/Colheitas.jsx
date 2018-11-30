import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default class Colheitas extends Component{
    constructor(props){
        super(props)
        this.state = { data: [] };
    }
    
    request = async () => {
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
        this.request();
     }
    
    render(){
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
            <Button variant="fab" color="secondary" aria-label="Edit">
                <Icon>edit_icon</Icon>
            </Button>
        </Grid>
        </div>
        <div>
            <React.Fragment>
            <Grid item xs={5}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Nome do cara
                        </Typography>
                        <Typography component="p">
                            Outras infos....
                            <br />
                            Pararara
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            </React.Fragment>
        </div>
    </div>
  )}
}

function NestedGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={24}>
            <Colheitas classes={classes} />
          </Grid>
        </Grid>
      </div>
    );
  }
  
  NestedGrid.propTypes = {
    classes: PropTypes.object.isRequired
  };