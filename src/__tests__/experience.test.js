import React from 'react'
import experience from '../Components/experience'
import { shallow } from 'enzyme';

describe('experience', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<experience />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});