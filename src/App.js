import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Cart from './Cart';

const styles = theme => ({
    total: {
        'float': 'right',
        'margin-right': 40,
        'font-size': '2rem'
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.products
        };
    }

    handleChange = (index, count) => {
        const items = this.state.items;
        items[index].count = count;
        this.setState({ items });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Cart items={this.state.items} onItemCountChange={this.handleChange} />
                <FormLabel className={classes.total}>合计： {this.state.items.reduce((acc, item) => acc + item.count * item.price, 0).toFixed(2)}</FormLabel>
            </div>
        );
    }
}

export default withStyles(styles)(App);