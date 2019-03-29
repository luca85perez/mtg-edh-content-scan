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
      <div className="container">
        {
          this.props.commanders.map((oCommander, index) => (
            <Commander
              key={index}
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
