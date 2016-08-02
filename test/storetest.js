import {expect} from 'chai';
import store from '../app/scripts/store';

describe('data store', function(){
  it('should exist', () => {
    expect(store).to.exist;
  });
  it('should have an instance of CartModel', function() {
    expect(store).to.have.property('cartModel');
    
    // expect(store.cartModel).to.have.deep.property('name');
  });
});
