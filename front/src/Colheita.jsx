// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const estilos1 = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const cartoes = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

function Colheita(props) {
  const { classes } = props;
//   const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
        <div>
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
            <h1>COLHEITAS</h1>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <AddIcon />
            </Button>
            <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                <Icon>edit_icon</Icon>
            </Button>
        </Grid>
        </div>
        <div>
            <React.Fragment>
            <Grid item xs={5}>
                <Card className={classes.card}>
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
  );
}


Colheita.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={24}>
            <Colheita classes={classes} />
          </Grid>
        </Grid>
      </div>
    );
  }
  
  NestedGrid.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(estilos1,cartoes)(Colheita,NestedGrid);
