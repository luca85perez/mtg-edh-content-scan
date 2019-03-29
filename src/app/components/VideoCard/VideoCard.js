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
  <article className="card">
    <a
      className="card__anchor"
      href={`https://www.youtube.com/watch?v=${props.video.item_id.videoId}`}
      target="_blank"
      rel="noopener noreferrer">
      <figure>
        <img src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
      </figure>
      <header>
        <div className="card__meta  container  flex-justify-content-space-between">
          <small>{props.video.snippet.channelTitle}</small>
          <small>
            <DateFormatter dateString={props.video.snippet.publishedAt} />
          </small>
        </div>
        <h2 className="card__title">{props.video.snippet.title}</h2>
      </header>
      <div>
        <p>{props.video.snippet.description}</p>
      </div>
    </a>
  </article>
);

export default VideoCard;
