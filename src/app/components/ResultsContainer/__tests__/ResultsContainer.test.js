import React from 'react';
import { shallow } from 'enzyme';

import ResultsContainer from '../ResultsContainer';

describe('ResultsContainer', () => {
  let component;
  const mockVideos = [
    {
      id: {
        videoId: '123',
      }
    },
    {
      id: {
        videoId: '456',
      }
    },
  ];

  beforeEach(() => {
    component = shallow(
      <ResultsContainer
        videos={mockVideos}
      />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders VideoCard', () => {
    const videoCard = component.find('VideoCard');
    expect(videoCard).toHaveLength(2);
  });
});
