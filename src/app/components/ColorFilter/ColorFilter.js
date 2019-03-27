import React, { Component } from 'react';

import './ColorFilter.scss';
import ColorOption from './ColorOption/ColorOption';

type Props = {
  onFilter: Function,
  onClearFilter: Function,
};

/**
 *
 *
 * @class ColorFilter
 * @extends {Component<Props>}
 */
class ColorFilter extends Component<Props> {
  constructor() {
    super();

    const availableColors = [
      {
        name: 'w',
        longName: 'White',
      },
      {
        name: 'u',
        longName: 'Blue',
      },
      {
        name: 'b',
        longName: 'Black',
      },
      {
        name: 'r',
        longName: 'Red',
      },
      {
        name: 'g',
        longName: 'Green',
      },
      {
        name: 'c',
        longName: 'Colorless',
      },
    ];

    const checkedItems = new Map();
    availableColors.map(color => {
      return checkedItems.set(color.name, false)
    });

    this.state = {
      availableColors,
      checkedItems,
    };
  }

  /**
   *
   *
   * @memberof ColorFilter
   */
  onColorOption = (e, option) => {
    const isChecked = e.target.checked;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(option.name, isChecked)
    }));

    return this.state;
  }

  /**
   *
   *
   * @memberof ColorFilter
   */
  onClear = () => {
    const checkedItems = new Map();

    this.state.availableColors.map(color => {
      return checkedItems.set(color.name, false)
    });
    this.setState({
      checkedItems,
    });
    this.props.onClearFilter();

    return this.state;
  }

  /**
   *
   *
   * @returns
   * @memberof ColorFilter
   */
  render() {
    return (
      <React.Fragment>
        {
          this.state.availableColors.map(color => {
            return (
              <ColorOption
                key={color.name}
                option={color}
                checked={this.state.checkedItems.get(color.name)}
                onChange={this.onColorOption}
              />
            );
          })
        }

        <button id="filter" onClick={() => this.props.onFilter(this.state)}>Pesquisar</button>
        <button id="clear" onClick={this.onClear}>Limpar</button>
      </React.Fragment>
    );
  }
}

export default ColorFilter;
