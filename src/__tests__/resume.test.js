import React from 'react'
import resume from '../Components/resume'
import { shallow } from 'enzyme';

describe('resume', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<resume />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});