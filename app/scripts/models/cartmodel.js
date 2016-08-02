import Bb from 'backbone';

const CartModel = Bb.Model.extend({
  total: 0,
  items: [],
  removeItem: function(itemToBeRemoved) {
    let newList = this.get('items').filter((item) => {
      return !(itemToBeRemoved.id === item.id)
    });
    this.set({items: newList});
  },
  addItem: function(itemToBeAdded) {
    this.get('items').push(itemToBeAdded);
    this.getTotal;
  },
  getTotal: function() {
    let adder = 0;
    this.get('items').forEach((item) => {
      adder += item.price;
    });
    this.set({total: adder.toFixed(2)});
    return this.get('total');
  }
});

export default CartModel;
