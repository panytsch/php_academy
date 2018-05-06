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
    listRef.push(_values);
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit} />
        <table>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Sex</td>
            <td>Country</td>
            <td>Change</td>
          </tr>
          {Object.entries(list).map(
            ([key, { firstName, lastName, email, sex, country }]) => (
              <tr key={key}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{sex || "not defined"}</td>
                <td>{country || "Vacanda"}</td>
                <td>
                  <Link to={key}>Edit</Link>
                </td>
              </tr>
            )
          )}
        </table>
      </div>
    );
  }
}

export default App;
