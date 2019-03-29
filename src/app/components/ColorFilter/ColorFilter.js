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
      <div className="container  filter">
        <legend className="flex-auto">
          Please, select desired Commander identity colors
        </legend>
        <div className="container  flex-direction-column">
          <div className="container">
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
          </div>

          <div className="container">
            <button
              id="filter"
              className="theme-secondary"
              onClick={() => this.props.onFilter(this.state)}>
              Search
            </button>
            <button
              id="clear"
              className="theme-secondary"
              onClick={this.onClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorFilter;
