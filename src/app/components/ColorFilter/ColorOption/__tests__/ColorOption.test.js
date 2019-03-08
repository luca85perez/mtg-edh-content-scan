import React from 'react';
import { shallow } from 'enzyme';

import ColorOption from '../ColorOption';

describe('ColorOption', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ColorOption
        option={{ longName: 'Test' }}
        checked={true}
        onChange={() => true}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
