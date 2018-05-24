import React from "react";

export class ChangeStateButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return <button onClick={this.handleClick}>Change State</button>;
    }
}