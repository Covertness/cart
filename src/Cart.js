import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SpinCountInput from './SpinCountInput';

const styles = theme => ({});

function Cart(props) {
    const { classes, items } = props;

    function handleChange(index, count) {
        props.onItemCountChange(index, count);
    }

    const listItems = items.map((item, index) =>
        <ListItem key={item.id}>
            <Avatar src={item.image} />
            <ListItemText primary={item.title} secondary={"价格： " + item.price.toFixed(2)} />
            <SpinCountInput count={item.count} onCountChange={handleChange.bind(this, index)} />
        </ListItem>
    );

    return (
        <div className={classes.root}>
            <List>{listItems}</List>
        </div>
    );
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);