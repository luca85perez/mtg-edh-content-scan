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
  <div className="commander">
    <a
      href={`#${props.commander.name}`}
      onClick={() => props.onSelect(props.commander.name)}>
      {props.commander.name}
    </a>
    {
      (props.commander.image_uris && props.commander.image_uris.small) &&
        <img
          src={props.commander.image_uris.small}
          alt={props.commander.name} />
    }
  </div>
);

export default Commander;
