import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer.js';

class CartScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CartContainer />
      </div>
    )
  }
}


export default CartScreen;
