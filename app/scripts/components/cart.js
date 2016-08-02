import React from 'react';
import store from '../store';

const Cart = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      total: 0
    }
  },
  render: function() {
    return (
      <div className="cart-box">
        {this.props.children}
      </div>
    )
  },
  componentDidMount: function() {
    store.cart.on('change' () => {
      this.setState({
        items: store.cart.get('items'),
        total: store.cart.get('total')
      });
    });
  }
});

export default Cart;
