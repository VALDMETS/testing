import {expect} from 'chai';
import store from '../app/scripts/store';
import Bb from 'backbone';

describe('data store', function(){
  
  it('should exist', () => {
    expect(store).to.exist;
  });

  it('should have an instance of CartModel', function() {
    expect(store).to.have.property('cartModel');
  });

  it('should have an array of items', function() {
    expect(store.cartModel.get('items')).to.be.an('array');
  });

  it('should have a total amount', function() {
    expect(store.cartModel.get('total')).to.exist;
  });
});
