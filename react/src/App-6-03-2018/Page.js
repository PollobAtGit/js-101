import React, { Component } from "react";
import { TodoList } from "./NumberList";
import { Todo } from "./Todo";
import { ReadKey } from "./ReadKey";

export class Page extends Component {
    render() {

        // Last passed element is alright because required is Shape
        var todos = [new Todo(1, "A"), new Todo(2, "B"), new Todo(3, "T"), { key: 23, item: "SOME" }];

        var anotherTodos = [new Todo(1, "A"), new Todo(2, "B"), new Todo(3, "T"), { key: 23, item_: "SOME" }];

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
                <TodoList todos={todos} />
                <TodoList todos={anotherTodos} />
                <ReadKey key={520} displayText="A1" />
                <ReadKey key={520} displayText="B1" />
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