import React from 'react';
import { shallow } from 'enzyme';

import ColorFilter from '../ColorFilter';

describe('ColorFilter', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ColorFilter />);
    expect(wrapper).toBeTruthy();
  });
});
