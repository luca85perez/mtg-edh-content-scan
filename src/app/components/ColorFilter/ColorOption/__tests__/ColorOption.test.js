import React from 'react';
import { shallow } from 'enzyme';

import ColorOption from '../ColorOption';

describe('ColorOption', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ColorOption />);
    expect(wrapper).toBeTruthy();
  });
});
