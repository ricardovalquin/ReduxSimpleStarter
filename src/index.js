import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/Search-bar';
import VideoList from './components/Video-list';
import VideoDetail from'./components/Video-detail';

const API_KEY = 'AIzaSyAIhEBWyOfetev7IS0Ro5B-DYwPX0AxAmU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] }/>
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.querySelector('.container')
);
