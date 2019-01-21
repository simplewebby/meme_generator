import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Generator from './Generator'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Generator />
      </div>
    );
  }
}

export default App;
