import React from "react";
import { ChangeStateButton } from "./ChangeStateButton";

/**
 * Order without re-render
 *      1# Constructor
 *      2# Component Will Mount
 *      3# Render
 *      4# Component Did Mount
 *
 * Component state's are encapsulated/private
 * setState literally invokes only 'render'. Not any other life cycle hooks such as componentWillMount, componentDidMount etc.
 */

export class LifeCycleHooks extends React.Component {

    constructor(props) {
        super(props);
        this.rerender = this.rerender.bind(this);

        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    rerender() {
        this.setState({});
    }

    render() {
        console.log("Render");
        return <div>
            <p>I Am a Paragraph</p>
            <ChangeStateButton handleClick={this.rerender} />
        </div>;
    }
}
