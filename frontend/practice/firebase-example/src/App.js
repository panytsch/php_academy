import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormCreate from './FormCreate';
import firebase from './firebase';

class App extends Component {
  onSubmit (_values) {
      console.log('values', _values);
      const listRef = firebase.database().ref('list');
      listRef.push(_values);
  }
  render() {
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
