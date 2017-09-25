import React, { Component } from 'react';
import db from '../data/db.json';
import ProductsContainer from '../containers/ProductsContainer.js';
import CartScreen from '../screens/CartScreen.js';

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: db
    };
  }

  render() {
    return(
      <div>
        <ProductsContainer db={this.state.database} />
        <CartScreen db={this.state.database}/>
      </div>
    )
  }
}


export default ProductsScreen;
