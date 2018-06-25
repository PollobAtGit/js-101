import React, { Component } from "react";
import { LoggedStatus } from "./LoggedStatus";
import { LogInComponent } from "./LogInComponent";

export class App extends Component {
    render() {
        return (
            <div>
                <LoggedStatus user="user A" isLoggedIn={true} />
                <LoggedStatus user="user B" isLoggedIn={false} />
                <LogInComponent />
            </div>
        );
    }
}