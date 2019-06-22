import React from 'react'
import education from '../Components/education'
import { shallow } from 'enzyme';

describe('education', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<education />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});