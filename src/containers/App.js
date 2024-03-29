import React, { Component } from "react";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Vanessa", age: "23" },
      { id: "2", name: "Moe", age: "26" },
      { id: "3", name: "No Where", age: "320304" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = (newName, otherName) => {
    // console.log('wasClicked')
    this.setState({
      persons: [
        { name: newName, age: "24" },
        { name: "Moenay", age: "27" },
        { name: otherName, age: "100293" }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons // INCORRECT
    // const persons = this.state.persons.slice(); // 1/2 CORRECT //copies full array and returns a new one
    const persons = [...this.state.persons]; // CORRECT // spread operator <- immutably update state
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    //Dynamically Render
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
    }

    return (
      <div className="App">
        <Cockpit
        toggle={this.togglePersonsHandler} />
        {persons}

        {/* 
        Conditiionally Render
        {
          this.state.showPersons ? <div>
          <Person change={this.nameChangedHandler} click={() => this.switchNameHandler("Ness", 'Whomever')} name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Drawing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Writing</Person>
          <Person click={this.switchNameHandler.bind(this, 'Ness', 'Ducky')} name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        </div> : null
        } 
      */}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App'))
}

export default App;
