import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormCreate from "./FormCreate";
import firebase from "./firebase";

class App extends Component {
  state = { item: null };
  componentDidMount() {
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);
    itemRef.on("value", snapshot => {
      let item = snapshot.val();
      this.setState({
        item
      });
    });
  }

  onSubmit(_values) {
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);
    itemRef.update(_values);
    return this.props.history.push("/");
  }

  render() {
    const { item } = this.state;
    if (!item || !Object.keys(item).length) {
      return <div>Loading...</div>;
    }
    console.log(item);
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit.bind(this)} initialValues={item} />
      </div>
    );
  }
}

export default App;
