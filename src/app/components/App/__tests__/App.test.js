import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  let component;
  let componentInstance;

  beforeEach(() => {
    component = shallow(<App />);
    componentInstance = component.instance();
    componentInstance.componentDidMount();
    componentInstance.componentWillMount();
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders ColorFilter', () => {
    const colorFilter = component.find('ColorFilter');
    expect(colorFilter).toHaveLength(1);
  });

  it('renders CommandersContainer', () => {
    const commandersContainer = component.find('CommandersContainer');
    expect(commandersContainer).toHaveLength(1);
  });

  it('renders ResultsContainer', () => {
    const resultsContainer = component.find('ResultsContainer');
    expect(resultsContainer).toHaveLength(1);
  });

  it('initializes state correctly', () => {
    const expectedState = {
      commanders: [],
      videos: [],
      nextPageToken: null,
      selectedCommanderName: null,
    };

    expect(componentInstance.state).toEqual(expectedState);
  });

  it('onColorFilter: should return [commanders] state', () => {
    // Golgari Swarm!
    const state = {
      checkedItems: new Map([
        ['b', true],
        ['g', true],
      ]),
    };

    expect(componentInstance.onColorFilter(state)).resolves.toHaveProperty('commanders');
  });

  it('onClearFilter: should return component to initial state', () => {
    const expectedState = {
      commanders: [],
      videos: [],
      nextPageToken: null,
      selectedCommanderName: null,
    };

    expect(componentInstance.onClearFilter()).toEqual(expectedState);
  });
});
