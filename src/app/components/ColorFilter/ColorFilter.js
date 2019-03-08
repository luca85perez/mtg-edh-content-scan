import React, { Component } from 'react';

import './ColorFilter.scss';
import ColorOption from './ColorOption/ColorOption';

type Props = {
  onFilter: any,
};

class ColorFilter extends Component<Props> {
  constructor() {
    super();

    this.state = {
      availableColors: [
        'w',
        'u',
        'b',
        'r',
        'g',
        'c',
      ],
      selectedColors: [],
    };
  }

  onColorOption = (e, option) => {
    const target = e.target;
    const isChecked = target.checked;

    if (isChecked) {
      this.setState((prevState) => ({
        selectedColors: [
          ...prevState.selectedColors,
          option
        ],
      }));
    } else {
      this.setState((prevState) => ({
        selectedColors: prevState.selectedColors.filter((color) => color !== option),
      }));
    }
  }

  render() {
    return (
      <div>
        {
          this.state.availableColors.map((color) => {
            return (
              <ColorOption
                key={color}
                option={color}
                onChange={this.onColorOption}
              />
            );
          })
        }
        <button onClick={() => this.props.onFilter(this.state)}>Pesquisar</button>
      </div>
    );
  }
}

export default ColorFilter;
