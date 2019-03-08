import React, { Component } from 'react';

import './App.scss';

import ColorFilter from '../ColorFilter/ColorFilter';
import CommandersContainer from '../CommandersContainer/CommandersContainer';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      commanders: [],
      videos: [],
    };
  }

  onColorFilter = ({ selectedColors }) => {
    window
      .fetch(
        `https://api.scryfall.com/cards/search?q=identity=${selectedColors.join('')}+is:commander`
      )
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;

        this.setState({
          commanders: data,
        });
      })
      .catch((err) => {
        console.error('Failed retrieving information', err);
      });
  }

  onCommanderSelect = (name) => {
    window
      .fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}+edh&order=viewCount&type=video&key=AIzaSyAXzdppHQxlLzFc9UV9SmcIdLz9zEtkA50`)
      .then((response) => response.json())
      .then((result) => {
        const { items } = result;

        this.setState({
          videos: items,
        });
      })
      .catch((err) => {
        console.error('Failed retrieving information', err);
      });
  }

  render() {
    return (
      <div>
        <ColorFilter onFilter={this.onColorFilter} />
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
