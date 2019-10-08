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

  const onToggleHandler = () => {};

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Manu", age: 18 },
        { name: "Stephenie", age: 13 }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1> Cool Story bro!</h1>
      <button style={style} onClick={onToggleHandler}>
        Switch Name
      </button>
      {personsState.showPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
            click={switchNameHandler}
            changed={nameChangedHandler}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[0].age}
            changed={nameChangedHandler}
          >
            {" "}
            My Hobbies: Racing{" "}
          </Person>
        </div>
      ) : null}
    </div>
  );
};

export default app;
