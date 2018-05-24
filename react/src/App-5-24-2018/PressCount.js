import React from "react";

export class PressCount extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleCountPress();
    }

    render() {
        return <button onClick={this.handleClick}>Increase '{this.props.forButton}'</button>;
    }
}