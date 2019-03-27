import React from 'react';
import { shallow } from 'enzyme';

import ColorFilter from '../ColorFilter';

describe('ColorFilter', () => {
  let component;
  let componentInstance;

  beforeEach(() => {
    component = shallow(
      <ColorFilter onFilter={() => true} onClearFilter={() => true} />
    );
    componentInstance = component.instance();
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders ColorOption', () => {
    const colorOption = component.find('ColorOption');
    expect(colorOption).not.toHaveLength(0);
  });

  it('renders filter buttons', () => {
    const buttons = component.find('button');
    expect(buttons).toHaveLength(2);
  });

  it('initializes state correctly', () => {
    expect(componentInstance.state).toHaveProperty('availableColors');
    expect(componentInstance.state).toHaveProperty('checkedItems');
  });

  it('onColorOption: correctly changes state', () => {
    const event = {
      target: {
        checked: true,
      }
    };
    const option = {
      name: 'b',
    };
    const result = componentInstance.onColorOption(event, option);

    expect(result.checkedItems.get('b')).toEqual(true);
  });

  it('onClear: correctly changes [checkedItems] state', () => {
    const result = componentInstance.onClear();

    expect(result.checkedItems.get('w')).toEqual(false);
    expect(result.checkedItems.get('u')).toEqual(false);
    expect(result.checkedItems.get('b')).toEqual(false);
    expect(result.checkedItems.get('r')).toEqual(false);
    expect(result.checkedItems.get('g')).toEqual(false);
  });

  it('clear button should call onClear method on click', () => {
    const onClearSpy = jest.spyOn(componentInstance, 'onClear');
    componentInstance.forceUpdate();
    component.find('#clear').simulate('click');

    expect(onClearSpy).toHaveBeenCalled();
    onClearSpy.mockRestore();
  });

  it('filter button should call onClear method on click', () => {
    const onFilterMock = jest.fn();
    component = shallow(
      <ColorFilter onFilter={onFilterMock} onClearFilter={() => true} />
    );
    component.find('#filter').simulate('click');

    expect(onFilterMock).toHaveBeenCalled();
  });
});
