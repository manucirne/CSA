import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import EditIcon from '@material-ui/icons/Edit';
import Logo from './img/bolo-de-cenoura.jpeg';
import Torta from './img/torta-de-abobrinha.jpg';
import Frango from './img/strogonoff-de-frango.jpg';
import Collapse from '@material-ui/core/Collapse';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import './Card.css';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeCard extends React.Component {
  state = {
    expanded0: false,
    expanded1: false,
    expanded2: false, 
  };

  handleExpandClick0 = () => {
    this.setState(state => ({ expanded0: !state.expanded0 }));
  };

  handleExpandClick1 = () => {
    this.setState(state => ({ expanded1: !state.expanded1 }));
  };

  handleExpandClick2 = () => {
    this.setState(state => ({ expanded2: !state.expanded2 }));
  };

  handleChange = (event) => {
    this.setState({id: event.target.value});
 }
 handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
 }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="Pagina">
        <div id="NewRecipe">

          <form onSubmit={this.handleSubmit}>
            <div>
                <TextField id="standard-dense" label="Título" margin="normal" fullWidth="260px"/> 
            </div>
            <div>
                <TextField id="standard-dense" label="Ingredientes" margin="normal" fullWidth="260px"/> 
            </div>
            <div>
                <TextField id="standard-multiline-flexible" label="Receita" multiline rowsMax="4" onChange={this.handleChange('multiline')} margin="normal" fullWidth="260px"/> 
            </div>
            <div>
              <IconButton title="Add" aria-label="Add" color="primary">
                  <AddIcon label="submit" type="submit" />
              </IconButton>
            </div>
          </form>
        </div>
        <div id="Card0" className="Card">
          <Card className={classes.card} margin='normal'>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton title="Delete" aria-label="Delete">
                  <DeleteRoundedIcon />
                </IconButton>
              }
              title="Usuário"
              subheader="Data DD/MM/AAAA"
            />
            <CardMedia
              className={classes.media}
              image={Logo}
              title="Paella dish"
            />
            <CardContent>
              <Typography component="p">
              <ul>
                <li>3 cenouras médias raspadas e picadas</li>
                <li>3 ovos</li>
                <li>1 xícara de óleo</li>        
              </ul>
              Depois unte e enfarinhe uma forma e despeje a massa nela. Asse em forno médio por cerca de 40 minutos. Tire do forno, espere amornar e desenforme.
              </Typography>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton title="Edit" aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded0,
                  })}
                  onClick={this.handleExpandClick0}
                  aria-expanded={this.state.expanded0}
                  aria-label="Show more"
                > 
                <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </CardContent>
            <Collapse in={this.state.expanded0} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                  to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                  cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div id="Card1" className="Card">
          <Card className={classes.card} margin='normal'>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton title="Delete" aria-label="Delete">
                  <DeleteRoundedIcon />
                </IconButton>
              }
              title="Usuário"
              subheader="Data DD/MM/AAAA"
            />
            <CardMedia
              className={classes.media}
              image={Frango}
              title="Paella dish"
            />
            <CardContent>
              <Typography component="p">
              <ul>
                <li>3 cenouras médias raspadas e picadas</li>
                <li>3 ovos</li>
                <li>1 xícara de óleo</li>        
              </ul>
              Depois unte e enfarinhe uma forma e despeje a massa nela. Asse em forno médio por cerca de 40 minutos. Tire do forno, espere amornar e desenforme.
              </Typography>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton title="Edit" aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded1,
                  })}
                  onClick={this.handleExpandClick1}
                  aria-expanded={this.state.expanded1}
                  aria-label="Show more"
                > 
                <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </CardContent>
            <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                  to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                  cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div id="Card2" className="Card">
          <Card className={classes.card} margin='normal'>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton title="Delete" aria-label="Delete">
                  <DeleteRoundedIcon />
                </IconButton>
              }
              title="Usuário"
              subheader="Data DD/MM/AAAA"
            />
            <CardMedia
              className={classes.media}
              image={Torta}
              title="Paella dish"
            />
            <CardContent>
              <Typography component="p">
              <ul>
                <li>3 cenouras médias raspadas e picadas</li>
                <li>3 ovos</li>
                <li>1 xícara de óleo</li>        
              </ul>
              Depois unte e enfarinhe uma forma e despeje a massa nela. Asse em forno médio por cerca de 40 minutos. Tire do forno, espere amornar e desenforme.
              </Typography>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton title="Edit" aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded2,
                  })}
                  onClick={this.handleExpandClick2}
                  aria-expanded={this.state.expanded2}
                  aria-label="Show more"
                > 
                <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </CardContent>
            <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                  to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                  cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);