import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoList extends Component {

    render() {


        const listItems = this
            .props
            .todos

            // Note key is defined here for each TodoItem which is recommended. key is a special property & makes
            // sense in context of Array only. Here we are manipulating Array. So setting key here makes sense rather
            // than setting it inside TodoItem

            .map(v => <TodoItem key={v.key} todo={v.item} />);

        return (
            <div>
                <ol>
                    {listItems}
                </ol>

                {/* 
                    This is fine.Keys need to be unique among siblings. Each key can be shared by
                    other components if they are not siblings
                */}
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    }
}

class TodoItem extends Component {

    // key is not set here for each <li>. Keys make sense in context of Array
    render() {
        return <li>{this.props.todo}</li>;
    }

}

TodoList.propTypes = {

    // Validating todos will be an array of shape {key, item}
    todos: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired
    })).isRequired
};
