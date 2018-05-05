import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormCreate from "./FormCreate";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class App extends Component {
  state = { list: [] };
  componentDidMount() {
    const listRef = firebase.database().ref("list");
    listRef.on("value", snapshot => {
      let list = snapshot.val();
      this.setState({
        list
      });
    });
  }

  onSubmit(_values) {
    const listRef = firebase.database().ref("list");
    console.log(listRef);
    listRef.push(_values);
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit} />
        <ul>
          {Object.entries(list).map(
            ([key, { firstName, lastName, email, sex }]) => (
              <li key={key}>
                {`${firstName} - ${lastName}: ${email} ${sex || ""}`}
                <Link to={key}>Edit</Link>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default App;
