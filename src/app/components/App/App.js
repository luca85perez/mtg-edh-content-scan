import React, { Component } from 'react';

import './App.scss';

import ColorFilter from '../ColorFilter/ColorFilter';
import CommandersContainer from '../CommandersContainer/CommandersContainer';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      commanders: [],
      videos: [],
    };
  }

  /**
   *
   *
   * @memberof App
   */
  onClearFilter = () => {
    this.setState({
      commanders: [],
      videos: [],
    });
  }

  /**
   *
   *
   * @memberof App
   */
  onColorFilter = state => {
    const checkedItens = state.checkedItems;
    const selectedColors = [];
    checkedItens.forEach((isChecked, name) => {
      if (isChecked) {
        selectedColors.push(name);
      }
    });

    if (selectedColors.length) {
      fetch(
        `https://api.scryfall.com/cards/search?q=identity=${selectedColors.join('')}+is:commander`
      )
      .then(response => response.json())
      .then(result => {
        const { data } = result;

        this.setState({
          commanders: data,
        });
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
      });
    }
  }

  /**
   *
   *
   * @memberof App
   */
  onCommanderSelect = name => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}+edh&order=viewCount&type=video&key=AIzaSyAXzdppHQxlLzFc9UV9SmcIdLz9zEtkA50`
    )
    .then(response => response.json())
    .then(result => {
      const { items } = result;

      this.setState({
        videos: items,
      });
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
    });
  }

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div>
        <ColorFilter
          onFilter={this.onColorFilter}
          onClearFilter={this.onClearFilter}
        />
        <CommandersContainer
          commanders={this.state.commanders}
          onCommanderSelect={this.onCommanderSelect}
        />
        <ResultsContainer
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
