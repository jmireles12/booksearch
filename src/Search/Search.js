import React, { Component } from 'react';
import Filter from './Filter/Filter'

class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="text">Search:</label>
                <input type="text" id="text" name="text" onChange={this.props.handleInput}/>
                <button type='submit'>Search</button>
                <Filter />
            </form>
        )
    }
}

export default Search