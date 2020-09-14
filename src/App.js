import React, { Component } from 'react';
import Books from './Books/Books';
import Header from './Header/Header';

class App extends Component {

  render(){
    return (
      <div className='App'>
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;