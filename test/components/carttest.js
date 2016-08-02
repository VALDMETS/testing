import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import Cart from '../../app/scripts/components/cart';
import CartItem from '../../app/scripts/components/cartitem';
// import CartModel from '../../app/scripts/models/cartmodel';
// import store from '../../app/scripts/store';

describe('<Cart/> component', function(){

  let testCart = shallow(<Cart/>);

  it('should render cart page to DOM', () => {
    expect(testCart.is('div')).to.be.true;
  });

  // it('should re-render when the cart model changes', () => {
  //   let store = {};
  //   store.cartModel = new CartModel({
  //     items: [{
  //       name: 'Microwave',
  //       price: 32.95,
  //       id: 235096
  //     }],
  //     total: 32.95
  //   });
  //   console.log(testCart.html());
  //   expect(testCart.contains('<span>Total:$ 32.95</span>')).to.be.true;
  //
  // });

  it('should render a <CartItem/> for every item in the model', () => {
    testCart.setState({
      items: [{
        name: 'Microwave',
        price: 32.95,
        id: 235096
      }, {
        name: 'Blender',
        price: 22.50,
        id: 235294
      }],
      total: 55.45
    });
    expect(testCart.find(CartItem)).to.have.length(2);
  });


});
