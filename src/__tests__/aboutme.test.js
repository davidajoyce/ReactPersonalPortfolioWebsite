import React from 'react'
import aboutme from '../Components/aboutme'
import { shallow } from 'enzyme';

describe('aboutme', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<aboutme />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});