import React, { Component } from 'react';
import Search from '../Search/Search';
import BookList from './BookList/BookList';

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const options = {
        method: 'GET',
        header: {
        'Authorization': 'Bearer AIzaSyA1APS86CqwYJF-dbpP0EKFQxeCP62Rdlk',
        'Content-Type': 'application/json'
        }
    }

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`, options)
        .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong, please try again later.');
        }
        return res;
        })
        .then(res => res.json())
        .then(data => {
        this.setState({
        books: [...data.items],
        error: null
        });
        })
        .catch(err => {
        this.setState({
            error: err.message
        });
        });
    }

    render() {
        return (
            <div>
                <Search handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
                <BookList books={this.state.books} />
            </div>
        )
    }
}

export default Books