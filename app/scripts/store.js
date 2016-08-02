import CartModel from './models/cartmodel';

export default {
  cartModel: new CartModel({
    items: [{
      name: 'Microwave',
      price: 32.95,
      id: 235096
    }, {
      name: 'Blender',
      price: 22.50,
      id: 235294
    }]
  })
};
