
import React from 'react';
import { configure,shallow, mount, render } from 'enzyme';
import {User } from '../components/User-card/index';

describe('<Users />', () => {
  let mockFn = jest.fn();
  let props = [{
    id: 0,
    firstName: "test",
    lastName: "test",
    age: 0,
    visits: 0,
    progress: 0,
    status: "test"
  }];

    it('render component', () => {
      User.prototype.componentDidMount = mockFn;
      const wrapper = shallow(
            <User user={props}/>
      );
      expect(wrapper.find('h1')).toHaveLength(1);
      expect(wrapper.find('.text-white')).toHaveLength(5);
    });

  it('delete', () => {
    User.prototype.onClickDelete = mockFn;
    const wrapper = shallow(
      <User user={props}/>
    );
    wrapper.find('.deleteBtn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(wrapper.find('.deleteBtn').text()).toEqual('Delete');
  });

  it('edite', () => {
    User.prototype.onClickEdit = mockFn;
    const wrapper = shallow(
      <User user={props}/>
    );
    wrapper.find('.editeBtn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(wrapper.find('.editeBtn').text()).toEqual('Edit');
  });

});
