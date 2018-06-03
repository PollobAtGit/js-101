import React, { Component } from "react";

export class NumberList extends React.Component {

    render() {

        const listItems = this.props.numbers.map(v => <li>{v}</li>);
        return (
            <div>
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    }
}