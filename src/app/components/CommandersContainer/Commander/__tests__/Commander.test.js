import React from 'react';
import { shallow } from 'enzyme';

import Commander from '../Commander';

describe('Commander', () => {
  it('renders without crashing', () => {
    const mockCommander = {
      name: 'Tester'
    };

    const wrapper = shallow(
      <Commander
        commander={mockCommander}
        onSelect={() => true}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
