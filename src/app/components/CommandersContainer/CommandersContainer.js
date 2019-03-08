import React, { Component } from 'react';

import './CommandersContainer.scss';

import Commander from './Commander/Commander';

type Props = {
  commanders: Array<{
    name: string;
    image_uris: {
      small: string;
    };
    multiverse_ids: number[];
  }>,
  onCommanderSelect: Function;
};

/**
 *
 *
 * @class CommandersContainer
 * @extends {Component<Props>}
 */
class CommandersContainer extends Component<Props> {
  render() {
    return (
      <div>
        {
          this.props.commanders.map(oCommander => (
            <Commander
              key={oCommander.multiverse_ids[0]}
              commander={oCommander}
              onSelect={this.props.onCommanderSelect}
            />
          ))
        }
      </div>
    );
  }
}

export default CommandersContainer;
