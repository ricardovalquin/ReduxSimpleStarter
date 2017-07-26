import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/Search-bar';

const API_KEY = 'AIzaSyAIhEBWyOfetev7IS0Ro5B-DYwPX0AxAmU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDom.render(
  <App />,
  document.querySelector('.container')
);
