import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/Search-bar';

const API_KEY = 'AIzaSyAIhEBWyOfetev7IS0Ro5B-DYwPX0AxAmU';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('.container'));
