import React from "react";
import { LifeCycleHooks } from "./LifeCycleHooks";
import { ComponentStatesAreSeparate } from "./ComponentStatesAreSeparate";

export class App extends React.Component {
    render() {
        return <div>
            <LifeCycleHooks />
            <ComponentStatesAreSeparate />
        </div>;
    }
}
