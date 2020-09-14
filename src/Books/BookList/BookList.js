import React, { Component } from 'react';
import BookCard from './BookCard/BookCard';

class BookList extends Component {
    render() {
        const list= this.props.books.map((book, i) => {
            return <BookCard 
                        key={i}
                        book={book}
                    />
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default BookList;