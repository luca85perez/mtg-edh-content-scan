import React from 'react';
import { shallow } from 'enzyme';

import CommandersContainer from '../CommandersContainer';

describe('CommandersContainer', () => {
  let component;
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

  beforeEach(() => {
    component = shallow(
      <CommandersContainer
        commanders={mockCommanders}
        onCommanderSelect={() => true}
      />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
