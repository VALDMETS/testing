import {expect} from 'chai';
import Bb from 'backbone';
import CartModel from '../../app/scripts/models/cartmodel';


describe('Cart Model', function(){
  it('should exist', () => {
    expect(CartModel).to.exist;

    // expect(CartModel).to.have.property('total');
    // expect(CartModel).to.have.deep.property('total');

    // expect(CartModel.get('total')).to.exist;
    // expect(CartModel.get('items')).to.exist;
  });
  
  it('should have a method to add an item', () => {
    expect(CartModel).to.respondTo('addItem');
  });

  it('should have a method to remove an item', () => {
    expect(CartModel).to.respondTo('removeItem');
  });
});
