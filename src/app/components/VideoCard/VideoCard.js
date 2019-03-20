import React from 'react';

import './VideoCard.scss';

import DateFormatter from '../DateFormatter/DateFormatter';

type Props = {
  video: {
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
  },
};

/**
 *
 * @param {*} props
 */
const VideoCard = (props: Props) => (
  <article>
    <a
      href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}
      target="_blank"
      rel="noopener noreferrer">
      <figure hidden>
        <img src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
      </figure>
      <header>
        <DateFormatter dateString={props.video.snippet.publishedAt} />
        <br />
        <small>{props.video.snippet.channelTitle}</small>
        <h4>{props.video.snippet.title}</h4>
      </header>
      <div>
        <p>{props.video.snippet.description}</p>
      </div>
    </a>
  </article>
);

export default VideoCard;
