import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import ColorFilter from '../ColorFilter/ColorFilter';
import CommandersContainer from '../CommandersContainer/CommandersContainer';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

import './App.scss';

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

    this.client = new ApolloClient({
      uri: 'https://mtg-edh-content-scan.herokuapp.com/',
    });
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

      if (!selectedColors.length) {
        return resolve(false);
      }

      this.client.query({
        query: gql`
          query($selectedColors: String!) {
            commanders(colors: $selectedColors) {
              name
              multiverse_ids
              image_uris {
                small
              }
            }
          }
        `,
        variables: {
          selectedColors: selectedColors.join(''),
        }
      }).then(({ data }) => {
        const { commanders } = data;

        this.setState({
          commanders,
        });

        return resolve(this.state);
      });
    });
  }

  /**
   *
   *
   * @memberof App
   */
  onCommanderSelect = (name: string, pageToken?: string) => {
    this.client.query({
      query: gql`
        query($name: String! $pageToken: String) {
          videos(name: $name pageToken: $pageToken) {
            items {
              item_id: id {
                videoId
              }
              snippet {
                channelId
                channelTitle
                description
                publishedAt
                thumbnails {
                  default {
                    url
                  }
                  high {
                    url
                  }
                  medium {
                    url
                  }
                }
                title
              }
            }
            nextPageToken
          }
        }
      `,
      variables: {
        name,
        pageToken,
      }
    }).then((response) => {
      const { data } = response;
      const { videos } = data;
      const { nextPageToken, items } = videos;

      if (name === this.state.selectedCommanderName) {
        this.setState(prevState => ({
          videos: [...prevState.videos, ...items],
          nextPageToken,
        }));
      } else {
        this.setState({
          videos: items,
          nextPageToken,
          selectedCommanderName: name,
        });
      }
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
      <React.Fragment>
        <ApolloProvider client={this.client}>
          <h1 className="app-title">MTG EDH Content Scan</h1>
          <div className="container  container--medium">
            <ColorFilter
              onFilter={this.onColorFilter}
              onClearFilter={this.onClearFilter}
            />
          </div>

          <div className="container">
            <CommandersContainer
              commanders={this.state.commanders}
              onCommanderSelect={this.onCommanderSelect}
            />
            <ResultsContainer videos={this.state.videos} />
          </div>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default App;
