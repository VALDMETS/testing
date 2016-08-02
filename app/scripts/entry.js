import store from './store';



store.cartModel.addItem(
  {
    name: 'Yo-yo',
    price: 5.99,
    id: 520915
  }
);

store.cartModel.removeItem(
  {
    name: 'Microwave',
    price: 32.95,
    id: 235096
  }
)
console.log(store.cartModel);
console.log(store.cartModel.getTotal());
