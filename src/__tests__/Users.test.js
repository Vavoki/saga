
import React from 'react';
import { configure,shallow } from 'enzyme';
import Users from '../components/Users/index';
import User from '../components/User/index';

describe('<Users />', () => {

  it('render component', () => {
    let mockFn = jest.fn();
    Users.prototype.componentDidMount = mockFn;
    let props = [{
        id: 0,
        firstName: "test",
        lastName: "test",
        age: 0,
        visits: 0,
        progress: 0,
        status: "test"
      }];
    const wrapper = shallow(<Users users = {props}/>);
    expect(wrapper.find('table').length).toBe(1);
  });

  it('render USER component', () => {
    let mockFn = jest.fn();
    Users.prototype.componentDidMount = mockFn;
    let props =[{
        id: 43,
        firstName: "quill",
        lastName: "parent",
        age: 15,
        visits: 12,
        progress: 64,
        status: "complicated"
      }
    ];
    const wrapper = shallow(<Users users = {props}  />);
    const users = wrapper.find(User) ;

    expect(users).not.toBeNull()
    expect(users).toHaveLength(1)
  });

});
