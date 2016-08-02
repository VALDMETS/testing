import React from 'react';
import store from '../store';
import CartItem from './cartitem';

const Cart = React.createClass({
  getInitialState: function() {
    return {
      // if using a server, zero these out
      items: store.cartModel.get('items'),
      total: store.cartModel.get('total')
    }
  },
  render: function() {
    let itemArray = this.state.items.map(function(item, i){
      return <CartItem key={i} data={item}/>
      // return <CartItem/>
    });
    return (
      <div className="cart-box">
      {itemArray}
      <span>Total: ${this.state.total}</span>
      </div>
    )
  },
  componentDidMount: function() {
    store.cartModel.on('change',() => {
      this.setState({
        items: store.cartModel.get('items'),
        total: store.cartModel.get('total')
      });
    });
  }
});

export default Cart;
