import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const data = [
  {
    title:
      "#1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:
      "#2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:
      "#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:
      "#4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:
      "#5 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:
      "#6 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

const Block = ({ id, title, description, className, onClick }) => {
  return (
    <div className="container">
      <h2 id={id} onClick={() => onClick(id)}>
        {title}
      </h2>
      <div className={`description ${className}`}>{description}</div>
    </div>
  );
};

class Mainblock extends React.Component {
  state = {
    activeID: null
  };
  vision(id) {
    this.setState({ activeID: id === this.state.activeID ? null : id });
  }
  render() {
    return (
      <div className="main">
        <h1>Acord</h1>
        {data.map((item, i) => (
          <Block
            key={i}
            id={i}
            {...item}
            onClick={this.vision.bind(this)}
            className={this.state.activeID == i ? "visible" : "hidden"}
          />
        ))}
      </div>
    );
  }
}

const App = props => (
  <Router basename={props.path}>
    <Route exact path="/" component={Mainblock} />
  </Router>
);

export default App;
