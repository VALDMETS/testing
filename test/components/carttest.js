import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Cart from '../../app/scripts/components/cart';

describe('<Cart/> component', function(){

  let testCart = shallow(<Cart/>)
  it('should render cart page to DOM', () => {
    expect(testCart.is('div')).to.be.true;
  });
});
