import React from "react";
import PropTypes from "prop-types";

export class StopClockButton extends React.Component {

    constructor(props) {
        super(props);
        this.clockState = "running";

        this.processClick = this.processClick.bind(this);
    }

    processClick() {
        if (this.clockState === "running") {

            this.clockState = "stopped";
            this.props.stopTicking();

        } else if (this.clockState === "stopped") {
            this.clockState = "running";
            this.props.reStartClock();
        }
    }

    reStartClock() {

    }

    render() {
        return <button onClick={this.processClick}>{this.props.stopText}</button>;
    }
}

StopClockButton.defaultProps = {
    stopText: "Stop Clock"
};

StopClockButton.propTypes = {
    stopText: PropTypes.string,
    stopTicking: PropTypes.func.isRequired
};
