import React from 'react';

import './Commander.scss';

type Props = {
  commander: {
    name: string;
    image_uris: {
      small: string;
    };
  };
  onSelect: Function;
};

/**
 *
 * @param {*} props
 */
const Commander = (props: Props) => (
  <div>
    <a
      href={`#${props.commander.name}`}
      onClick={() => props.onSelect(props.commander.name)}>
      {props.commander.name}
    </a>
    <img
      src={props.commander.image_uris.small}
      alt={props.commander.name}
      hidden />
  </div>
);

export default Commander;
