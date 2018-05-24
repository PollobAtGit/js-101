import React from "react";
import { PressCount } from "./PressCount";

export class ComponentStatesAreSeparate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { countPressed: 0, frequencyPressed: 0 };
        this.handleCountPress = this.handleCountPress.bind(this);
        this.handleFrequencyPress = this.handleFrequencyPress.bind(this);
    }

    handleCountPress() {
        // This approach to read value from state directly is not recommended. This might cause issue
        // though it might work sometims too
        // The issue occurs due to the fact that sometimes react might batch state update operations
        this.setState({ countPressed: this.state.countPressed + 1 });
    }

    handleFrequencyPress() {
        // State changes are merged not replaced by the entire object. So frequencyPressed will
        // be replacd after this statment but countPressed will be unchanged
        this.setState((prevState, t) => ({ frequencyPressed: prevState.frequencyPressed + 1 }));
    }

    render() {
        return <div>
            <div>State Count is {this.state.countPressed}</div>
            <div>State Frequency is {this.state.frequencyPressed}</div>
            <PressCount handleCountPress={this.handleCountPress} forButton="Count" />
            <PressCount handleCountPress={this.handleFrequencyPress} forButton="Frequency" />
        </div>;
    }
}