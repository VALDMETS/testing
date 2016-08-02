import React from 'react';

const CartItem = React.createClass({
  render: function() {
    return(
      <div className="cart-item">
        {this.props.data.name}
        ${this.props.data.price}
      </div>
    )
  }
});

export default CartItem
