import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';

const App = () => {
  return (
    <div className="container">
      <Title />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
