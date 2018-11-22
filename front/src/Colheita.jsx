import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

export default class Colheita extends Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>COLHEITAS</h1>
                <Button variant="fab" color="primary" aria-label="Add">
                    <AddIcon />
                </Button>
                <Button variant="fab" color="secondary" aria-label="Edit">
                    <Icon>edit_icon</Icon>
                </Button>
                {/* https://material-ui.com/demos/buttons/ */}
            </div>

            <div>
                {/* https://material-ui.com/demos/cards/ */}
            </div> 

        )
    }

    
}