import React from 'react'
import skills from '../Components/skills'
import { shallow } from 'enzyme';

describe('skills', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<skills />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});