import React from 'react';
import { shallow } from 'enzyme';

import CommandersContainer from '../CommandersContainer';

describe('CommandersContainer', () => {
  it('renders without crashing', () => {
    const mockCommanders = [
      {
        name: 'Tester',
        multiverse_ids: [0],
      },
      {
        name: 'Testeradon',
        multiverse_ids: [666],
      },
    ];

    const wrapper = shallow(
      <CommandersContainer
        commanders={mockCommanders}
        onCommanderSelect={() => true}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
