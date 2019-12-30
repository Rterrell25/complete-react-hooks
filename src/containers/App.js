import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Max",
        age: 28
      },
      {
        id: "2",
        name: "Rox",
        age: 35
      },
      {
        id: "3",
        name: "Jahseh",
        age: 18
      }
    ],
    showPersons: false,
    userInput: ""
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        <br />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
