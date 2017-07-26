import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: 'Starting value'
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }

  onInputChange = event => this.setState({ term: event.target.value });
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

}

export default SearchBar;
