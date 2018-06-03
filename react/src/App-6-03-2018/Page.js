import React, { Component } from "react";
import { NumberList } from "./NumberList";

export class Page extends Component {
    render() {
        return (
            <div>
                {
                    /* 
                    This won't be shown because even though parent component is rendering the component 
                    the component itself returns null which means the component won't be rendered
                    */
                }
                <Warning />
                <Warning shouldDisplay />
                <NumberList numbers={[10, 89, 0.23]} />
            </div>
        );
    }
}

class Warning extends Component {

    render() {

        if (this.props.shouldDisplay) return (
            <div>
                <h1>Warning</h1>
            </div>
        );

        // null doesn't render the component even if Parent component renders it
        return null;
    }
}