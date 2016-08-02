import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Cart from '../../app/scripts/components/cart';
import CartItem from '../../app/scripts/components/cartitem';

describe('<CartItem/> component', function(){

  let testPassThroughItem = {
    name: 'Yo-yo',
    price: 5.99,
    id: 520915
  };
  let testCartItem = shallow(<CartItem data={testPassThroughItem}/>);

  it('should render item component to DOM', () => {
    expect(testCartItem.is('div')).to.be.true;
  });

  it('should take a pass-through property from <Cart/>', () => {
    expect(testCartItem.html()).is.equal('<div class="cart-item">Yo-yo$5.99</div>');
  });
});
