import React from "react";

export class Anchor extends React.Component {

    constructor(props) {
        super(props);
    }

    // handler method is taking event argument. This argument will be passed via React
    handleClick(value) {
        return function (event) {
            console.log(value);
            console.log(event);
        }.bind(this);
    }

    // Event is passed by React as the last argument
    handleOtherClick(value, eventArgs) {

        eventArgs.preventDefault();

        console.log(`Value: ${value}`);
        console.log(eventArgs);

        // Passing false doesn't work we must invoke preventDefault
        // return false;
    }

    handleAnotherClick(e, value) {
        e.preventDefault();
        console.log(e);
        console.log(value);
    }

    render() {
        return <div>
            <a href="#" onClick={this.handleClick(10)}>Click Me</a>;

            {/*
                When we want to pass custom argument values we need to use 'bind' in place of the original
                event handler. Otherwise the solution is the same as 'handleClick' which is not that
                obvious
            */}
            <a href="#" onClick={this.handleOtherClick.bind(this, 10)}>Click Me (Other)</a>;

            <div>
                {/*
                    This approach removes the need to bind 'this' altogether but it's not a recommended
                    approach by React as it might cause some performance issue
                */}
                <a href="#" onClick={(event) => this.handleAnotherClick(event, 50)}>Click Me Another</a>
            </div>
        </div >
    }
}