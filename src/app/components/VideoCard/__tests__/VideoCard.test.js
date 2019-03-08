import React from 'react';
import { shallow } from 'enzyme';

import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  it('renders without crashing', () => {
    const mockVideo = {
      snippet: {
        thumbnails: {
          default: {
            url: 'google.com'
          }
        },
        title: 'Crazy video',
        channelTitle: 'Best channel',
        publishedAt: 'today',
        description: 'Mussum ipsum cacildis'
      },
    };

    const wrapper = shallow(
      <VideoCard
        video={mockVideo}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
