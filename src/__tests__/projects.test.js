import React from 'react'
import projects from '../Components/projects'
import { shallow } from 'enzyme';

describe('projects', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<projects />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});