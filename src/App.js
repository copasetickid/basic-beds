import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsScreen from './screens/ProductsScreen.js';
import CartScreen from './screens/CartScreen.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Basic Beds</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProductsScreen />
        <CartScreen />
      </div>
    );
  }
}

export default App;
