import React from 'react';
import { shallow } from 'enzyme';

import DateFormatter from '../DateFormatter';

describe('DateFormatter', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<DateFormatter />);
    expect(wrapper).toBeTruthy();
  });
});
