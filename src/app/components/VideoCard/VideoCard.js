import React from 'react';

import './VideoCard.scss';

const VideoCard = ({ video }) => (
  <article>
    <figure>
      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
    </figure>
    <header>
      <small>{video.snippet.channelTitle}</small><time>{video.snippet.publishedAt}</time>
      <h2>{video.snippet.title}</h2>
    </header>
    <div>
      <p>{video.snippet.description}</p>
    </div>
  </article>
);

export default VideoCard;
