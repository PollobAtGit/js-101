import React from 'react';

// This import will not throw exception even if the packages are not included into the application
import PropTypes from "prop-types";

export class LogInButton extends React.Component {
    render() {
        return <button disabled={this.props.isDisabled}>{this.props.buttonText}</button>;
    }
}

LogInButton.propTypes = {
    buttonText: PropTypes.string,
    isDisabled: PropTypes.bool
}
