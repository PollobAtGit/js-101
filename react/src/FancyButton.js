import React from 'react';
import PropTypes from "prop-types";

export class FancyButton extends React.Component {

    constructor(props) {
        super(props);
        this.buttonStyles = { color: this.props.color };
    }

    render() {
        console.log("Render");

        return <button style={this.buttonStyles}>{this.props.buttonName}</button>;
    }
}

// POI: Default properties
FancyButton.defaultProps = {
    buttonStyles: { color: "black" }
}

export class ParagraphWithChildren extends React.Component {
    render() {
        return <p>Parameter With Children. Provided children: {this.props.children}</p>;
    }
}


export function JSExpressionAsChildren(props) {

    const textToDisplay = typeof props.children === "function"
        ? props.children('DAN BROWN')
        : props.children;

    // Note the distinction that 'props' doesn't need 'this' when the component is defined as a plain old js function
    // Passed js expression is a function. So invoking that
    return <ParagraphWithChildren>{textToDisplay}</ParagraphWithChildren>;
}

// propType to function type component
JSExpressionAsChildren.propTypes = {
    children: PropTypes.func
};

export function TodoListItem(props) {
    return <li>{props.listItem}</li>;
}

export function TodoList(props) {

    const todos = ['A', 'B', 'C'];
    return (
        <ol>
            {todos.map(x => <TodoListItem listItem={x} />)}
        </ol>
    );
}


export const JsxNotRender = (props) => <div>{props.children}</div>;
