import React, { Component } from 'react';

import './ResultsContainer.scss';

import VideoCard from '../VideoCard/VideoCard';

type Props = {
  videos: Array<{
    id: {
      videoId: string;
    };
    snippet: {
      channelId: string;
      channelTitle: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        default: {
          url: string;
        };
        high: {
          url: string;
        };
        medium: {
          url: string;
        };
      };
      title: string;
    };
  }>,
};

class ResultsContainer extends Component<Props> {
  render() {
    return (
      <div>
        {
          this.props.videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
            />
          ))
        }
      </div>
    )
  }
}

export default ResultsContainer;
