import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { GreetUser } from "./GreetUser";

export class LogInComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false, user: null };

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn(user) {
        this.setState({ isLoggedIn: true, user: user });
    }

    logOut() {
        this.setState({ isLoggedIn: false });
    }

    render() {

        // Storing react component
        const loginButton = !this.state.isLoggedIn
            ? <Login logInHandler={this.logIn} />
            : <Logout logOutHandler={this.logOut} />;

        return (
            <div>
                {loginButton}

                {/* Conditional rendering */}
                {this.state.isLoggedIn && <GreetUser user={this.state.user} />}
            </div>);
    }
}