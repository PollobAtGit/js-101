import React from "react";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: null };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleKeyPress(e) {
        this.setState({ user: e.target.value });
    }

    handleLogIn() {
        this.props.logInHandler(this.state.user);
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyPress} />
                <button onClick={this.handleLogIn}>
                    Login
                </button>
            </div >
        );
    }
}
