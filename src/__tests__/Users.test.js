
import React from 'react';
import { configure,shallow } from 'enzyme';
import Users from '../components/Users/index';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() });

describe('<Users />', () => {

  it('render component', () => {
    const wrapper = shallow(<Users users = {[{
      id: 43,
      firstName: "quill",
      lastName: "parent",
      age: 15,
      visits: 12,
      progress: 64,
      status: "complicated"
    }]}/>);
    expect(wrapper.find('table').toBe(true);
  });

});
