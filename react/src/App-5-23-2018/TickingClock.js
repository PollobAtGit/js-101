import React from "react";

import { StopClockButton } from "./StopClockButton";

export class TickingClass extends React.Component {

    constructor(props) {
        super(props);

        // Set state as an object in constructor. How about default state as default props?

        // Invoking set state here is NOT desired because in that case the component will re-render once more
        // this.setState({ now: new Date().toLocaleTimeString() });

        // Recommended approach
        // Setting 'state' property of this object in constructor is the desired approach because we are
        // not performing setState meaninf not re-rendering the compoment again also setState doesn't work properly
        // when invoked in constructor because in that case may be some internal operation fails which doesn't
        // set stat properly

        this.state = { now: new Date().toLocaleTimeString() };
        this.timeId = setInterval(() => this.changeTime(), 1000);

        this.stopTicking = this.stopTicking.bind(this);
        this.reStartClock = this.reStartClock.bind(this);
    }

    componentWillMount() {

        // componentWillMount can properly set state but that throws a warning meaning that's not recommended

        // this.state = { now: new Date().toLocaleTimeString() };
        // this.setState({ now: new Date().toLocaleTimeString() });
    }

    changeTime() {
        // Every invocation of setState RE-RENDERS the component. So setState performs other operations
        // beside setting the 'state' object
        this.setState({ now: new Date().toLocaleTimeString() });
    }

    stopTicking() {
        clearInterval(this.timeId);
    }

    reStartClock() {
        this.timeId = setInterval(() => this.changeTime(), 1000);
    }

    render() {
        return (
            <div>
                <p>Current Time {this.state.now}</p>
                <StopClockButton stopTicking={this.stopTicking} reStartClock={this.reStartClock} />
            </div>
        );
    }
}
