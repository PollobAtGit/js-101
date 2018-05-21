import React from "react";
import PropTypes from "prop-types";
import { Greeter, WelcomeGreeter } from "./servic/Greeter";

export class GreetingComboButton extends React.Component {
    render() {
        const greeting = this.props.greeter.greeting;
        return <button style={this.props.comboButtonStyle}>{greeting}</button>
    }
}

GreetingComboButton.propTypes = {
    comboButtonStyle: PropTypes.object,
    greeter: PropTypes.instanceOf(WelcomeGreeter)
};

GreetingComboButton.defaultProps = {
    comboButtonStyle: { color: "blue" }
};