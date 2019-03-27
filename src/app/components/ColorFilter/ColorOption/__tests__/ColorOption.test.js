import React from 'react';
import { shallow } from 'enzyme';

import ColorOption from '../ColorOption';

describe('ColorOption', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <ColorOption
        option={{ longName: 'Test' }}
        checked={true}
        onChange={() => true}
      />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('should call props function on change event', () => {
    const onChangeMock = jest.fn();
    component = shallow(
      <ColorOption
        option={{ longName: 'Test' }}
        checked={true}
        onChange={onChangeMock}
      />
    );
    component.find('input').simulate('change');

    expect(onChangeMock).toHaveBeenCalled();
  });
});
