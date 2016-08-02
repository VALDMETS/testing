import {expect} from 'chai';
import Bb from 'backbone';

import CartModel from '../../app/scripts/models/cartmodel';

describe('Cart Model', function(){

  it('should exist', () => {
    expect(CartModel).to.exist;
  });

  it('should have a working method to add an item', () => {
    expect(CartModel).to.respondTo('addItem');

    let cartModelTest = new CartModel({
      items: [{
        name: 'Microwave',
        price: 32.95,
        id: 235096
      }, {
        name: 'Blender',
        price: 22.50,
        id: 235294
      }]
    });
    let preFunctionLength = cartModelTest.get('items').length;
    cartModelTest.addItem({
      name: 'Yo-yo',
      price: 5.99,
      id: 520915
    });
    expect(preFunctionLength).to.be.below(cartModelTest.get('items').length);
  });

  it('should have a working method to remove an item', () => {
    expect(CartModel).to.respondTo('removeItem');

    let cartModelTest = new CartModel({
      items: [{
        name: 'Microwave',
        price: 32.95,
        id: 235096
      }, {
        name: 'Blender',
        price: 22.50,
        id: 235294
      }]
    });
    let preFunctionLength = cartModelTest.get('items').length;
    cartModelTest.removeItem({
      name: 'Microwave',
      price: 32.95,
      id: 235096
    });
    expect(preFunctionLength).to.be.above(cartModelTest.get('items').length);
  });

  it('should have a working method to calculate a total cost', () => {
    expect(CartModel).to.respondTo('getTotal');

    let cartModelTest = new CartModel({
      items: [{
        name: 'Microwave',
        price: 32.95,
        id: 235096
      }, {
        name: 'Blender',
        price: 22.50,
        id: 235294
      }]
    });
    expect(cartModelTest.getTotal()).to.equal('55.45');
  });
});
