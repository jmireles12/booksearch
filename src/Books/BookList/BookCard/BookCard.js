import React, { Component } from 'react';

class BookCard extends Component {
    render() {
        const book = this.props.book
        return (
            <div>
                <h2>{book.volumeInfo.title}</h2>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.title}/>
                <a href={book.volumeInfo.infoLink}>{book.volumeInfo.infoLink}</a>
            </div>
        )
    }
}

export default BookCard;