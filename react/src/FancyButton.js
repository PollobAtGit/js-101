import React from 'react';

export class FancyButton extends React.Component {

    constructor(props) {
        super(props);
        this.buttonStyles = { color: this.props.color };
    }

    render() {
        console.log("Render");

        return <button style={this.buttonStyles}>{this.props.buttonName}</button>;
    }
}

// POI: Default properties
FancyButton.defaultProps = {
    buttonStyles: { color: "black" }
}