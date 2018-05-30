
import React from 'react';
import { configure,shallow } from 'enzyme';
import Button from '../components/button/index';

describe('<Button />', () => {

  it('render button', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<Button toggleModal={mockCallBack} />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('click button', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<Button toggleModal={mockCallBack}  />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});

