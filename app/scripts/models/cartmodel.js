import Bb from 'backbone';

const CartModel = Bb.Model.extend({
  total: 0,
  items: [],
  removeItem: function(item) {
    console.log('remove it');
  },
  addItem: function(item) {
    console.log('push an item');
  },
});

export default CartModel;
