import React from "react";
import PropTypes from "prop-types";

class BookItem extends React.Component {
    render() {
        return <li>{this.props.book}</li>;
    }
}

export class BookList extends React.Component {

    render() {
        const books = this.props.books;

        if (Array.isArray(books)) {

            // map/foreach all discards empty value in [,5]
            const bookItems = books.map(x => <BookItem book={x} />);
            return <ol> {bookItems}</ol>;
        } else {
            return <div>No Books To Show</div>;
        }
    }
}

BookList.propTypes = {
    // If books is not array then a warning will be shown in browser
    books: PropTypes.array
}

