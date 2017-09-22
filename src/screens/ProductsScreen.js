import React, { Component } from 'react';
import db from '../data/db.json';
import ProductsContainer from '../containers/ProductsContainer.js';

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ProductsContainer db={db} />
      </div>
    )
  }
}


export default ProductsScreen;
