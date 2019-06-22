import React from 'react'
import landingpage from '../Components/landingpage'
import { shallow } from 'enzyme';

describe('landingpage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<landingpage />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
