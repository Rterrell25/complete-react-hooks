import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Rox",
        age: 69
      },
      {
        name: "Jahseh",
        age: 28
      }
    ]
  };

  switchNameHandler = () => {
    // DON'T DO THIS this.state.person[0].name="Maximilian"
    this.setState({
      persons: [
        {
          name: "Maximilian",
          age: 28
        },
        {
          name: "Rox",
          age: 69
        },
        {
          name: "Jahseh",
          age: 69
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}
