import React, { Component } from "react";

export class ReadKey extends Component {
    render() {
        return (
            <div>

                {/* 
                    Key value is not readable inside component because 'key' is a specific property/attribute.
                    It can be used only to pass 'key' value which has different meaning
                */}

                {this.props.key}
                <h1>{this.props.displayText}</h1>
            </div>
        );
    }
}