import React from "react";
import PropTypes from "prop-types";

export class ComboButton extends React.Component {
    render() {
        return <button style={this.props.comboButtonStyle}>{this.props.buttonText}</button>
    }
}

ComboButton.propTypes = {
    comboButtonStyle: PropTypes.object,
    buttonText: PropTypes.string
};

ComboButton.defaultProps = {
    comboButtonStyle: { color: "blue" }
};