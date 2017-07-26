import _ from 'lodash';
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
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.querySelector('.container')
);
