import React from 'react'
import contact from '../Components/contact'
import { shallow } from 'enzyme';

describe('contact', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<contact />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});