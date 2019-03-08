import React from 'react';

import './Commander.scss';

const Commander = ({ commander, onSelect }) => (
  <div>
    <a
      href={`#${commander.name}`}
      onClick={() => onSelect(commander.name)}>
      {commander.name}
    </a>
    {/* <img src={commander.image_uris.small} alt={commander.name} /> */}
  </div>
);

export default Commander;
