import React from 'react';
import { shallow } from 'enzyme';

import Commander from '../Commander';

describe('Commander', () => {
  let component;
  const mockCommander = {
    name: 'Tester',
    image_uris: {
      small: 'small.jpg',
    },
  };

  beforeEach(() => {
    component = shallow(
      <Commander
        commander={mockCommander}
        onSelect={() => true}
      />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('href should call props function on click', () => {
    const onSelectMock = jest.fn();
    component = shallow(
      <Commander
        commander={mockCommander}
        onSelect={onSelectMock}
      />
    );
    component.find('a').simulate('click');

    expect(onSelectMock).toHaveBeenCalled();
  });
});
