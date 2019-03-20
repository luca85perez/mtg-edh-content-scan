import React, { Component } from 'react';

import './App.scss';

import config from '../../data/config';
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
  /**
   *Creates an instance of App.
   * @memberof App
   */
  constructor() {
    super();

    this.state = {
      commanders: [],
      videos: [],
      nextPageToken: null,
      selectedCommanderName: null,
    };
  }

  /**
   *
   *
   * @memberof App
   */
  componentDidMount() {
    window.onscroll = () => {
      const hasScrolledToBottom: boolean = (
        (window.innerHeight + document.documentElement.scrollTop)
        === document.documentElement.offsetHeight
      );

      if (hasScrolledToBottom) {
        this.onScrolledToBottom();
      }
    }
  }

  /**
   *
   *
   * @memberof App
   */
  componentWillMount() {
    window.onscroll = () => {}
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
      nextPageToken: null,
      selectedCommanderName: null,
    });

    return this.state;
  }

  /**
   *
   *
   * @memberof App
   */
  onColorFilter = state => {
    return new Promise((resolve) => {
      const checkedItens = state.checkedItems;
      const selectedColors = [];

      checkedItens.forEach((isChecked: boolean, name: string) => {
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

            resolve(this.state);
          })
          .catch(err => {
            resolve(new Error(err));
          });
      } else {
        resolve(false);
      }
    });
  }

  /**
   *
   *
   * @memberof App
   */
  onCommanderSelect = (name: string, pageToken?: string) => {
    const options: string[] = [
      'part=snippet',
      `q=${name.replace(/\s/g, '+')}+edh`,
      'order=date',
      'type=video',
      'maxResults=50',
      `key=${config.api.youtube}`,
    ];

    if (pageToken) {
      options.push(`pageToken=${pageToken}`);
    }

    fetch(`https://www.googleapis.com/youtube/v3/search?${options.join('&')}`)
      .then(response => response.json())
      .then(result => {
        const { items, nextPageToken } = result;

        this.setState(prevState => ({
          videos: [...prevState.videos, ...items],
          nextPageToken,
          selectedCommanderName: name,
        }));
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  /**
   *
   *
   * @memberof App
   */
  onScrolledToBottom = () => {
    if (this.state.nextPageToken) {
      this.onCommanderSelect(
        this.state.selectedCommanderName,
        this.state.nextPageToken
      )
    }
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
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
