import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

class SpinCountInput extends React.Component {
    handleCountChange = (event) => {
        const count = event.target.value;

        if (count.length > 0 && !/^\d+$/.test(count)) return;
        this.props.onCountChange(count);
    }

    handleAdd = () => {
        this.props.onCountChange(this.props.count + 1);
    }

    handleRemove = () => {
        const count = this.props.count - 1;
        if (count < 0) return;

        this.props.onCountChange(count);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button mini={true} variant="fab" aria-label="remove" className={classes.button} onClick={this.handleRemove}>
                    <RemoveIcon />
                </Button>
                <Input value={this.props.count} onChange={this.handleCountChange} />
                <Button mini={true} variant="fab" color="primary" aria-label="add" className={classes.button} onClick={this.handleAdd}>
                    <AddIcon />
                </Button>
            </div>
        )
    }
}


SpinCountInput.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpinCountInput);