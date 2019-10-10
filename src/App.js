import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "Manu", age: 18 },
      { name: "Stephenie", age: 30 }
    ],
    showPersons: false
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "max", age: 18 },
        { name: "Manu", age: 18 },
        { name: "Stephenie", age: 13 }
      ]
    });
  };

  const onToggleHandler = () => {
    setPersonsState({
      persons: [
        { name: "max", age: 18 },
        { name: "Manu", age: 18 },
        { name: "Stephenie", age: 13 }
      ],
      showPersons: !personsState.showPersons
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Manu", age: 18 },
        { name: "Stephenie", age: 13 }
      ]
    });
  };

  const deletePersonHandler = (idx) => {
    const personsArr = [...personsState.persons];
    personsArr.splice(idx, 1);
    setPersonsState({
      persons: personsArr,
      showPersons: personsState.showPersons      
    })
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        { personsState.persons.map( (person, index) => {
          return <Person
          key = {person.name}
          click = {() => deletePersonHandler(index)}
          name={person.name} 
          age={person.age} />
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Cool Story bro!</h1>
      <button style={style} onClick={onToggleHandler}>
        Switch Name
      </button>
      {persons}
    </div>
  );
};

export default app;
