import React, { Component } from 'react';
import ProductCard from '../components/productCard.js';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: this.props.db
    };
    console.log(this.state);
    console.log(props)
  }

  render() {
    return(
      <div>
        <ProductCard product={this.state.db.featured_product} />
      </div>
    )
  }

}

export default ProductsContainer;
