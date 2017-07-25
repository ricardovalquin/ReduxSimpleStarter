import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div>Say hello to my little friend!</div>;
};

ReactDom.render(<App />, document.querySelector('.container'));
