import React from 'react';
import { shallow } from 'enzyme';

import ResultsContainer from '../ResultsContainer';

describe('ResultsContainer', () => {
  it('renders without crashing', () => {
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

    const wrapper = shallow(
      <ResultsContainer
        videos={mockVideos}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
