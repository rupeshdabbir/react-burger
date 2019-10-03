import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'max', age: 28 },
      { name: 'Manu', age: 18 },
      { name: 'Stephenie', age: 30 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'max', age: 28 },
        { name: 'Manu', age: 18 },
        { name: 'Stephenie', age: 13 }
      ]
    });
  }

    return (
      <div className="App">
        <h1> Cool Story bro!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} />
        <Person name={personsState.persons[1].name} > My Hobbies: Racing </Person>
      </div>
    );
}


export default app;
