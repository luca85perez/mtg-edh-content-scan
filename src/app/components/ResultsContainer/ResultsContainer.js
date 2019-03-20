import React from 'react';

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

/**
 *
 * @param {*} props
 */
const ResultsContainer = (props: Props) => (
  <div>
    {
      props.videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          video={video}
        />
      ))
    }
  </div>
);

export default ResultsContainer;
