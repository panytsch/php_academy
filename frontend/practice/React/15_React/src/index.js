import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow';

class App extends React.Component {

  render = (props) => {
    console.log(props);
    return (
      <button>ckick me</button>
    )}
}

let aFunction = () => {
  console.log(1);
}

ReactDOM.render(
  <App onClick={aFunction}/>,
  document.getElementById('root')
);
