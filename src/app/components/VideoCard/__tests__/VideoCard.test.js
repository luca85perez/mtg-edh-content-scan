import React from 'react';
import { shallow } from 'enzyme';

import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  let component;
  const mockVideo = {
    id: {
      videoId: '123456',
    },
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

  beforeEach(() => {
    component = shallow(
      <VideoCard video={mockVideo} />
    );
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
