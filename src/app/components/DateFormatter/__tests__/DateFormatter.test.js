import React from 'react';
import { shallow } from 'enzyme';

import DateFormatter from '../DateFormatter';

describe('DateFormatter', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <DateFormatter dateString={ '2019-01-30T10:00:00.000Z' } />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('correctly formats date', () => {
    const expected = new Date('2019-01-30T10:00:00.000Z').toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    expect(component.text()).toEqual(expected);
  });
});
