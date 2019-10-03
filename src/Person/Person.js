import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p> I'm {props.name} a person and I am {~~(Math.random()* 30)}</p>
            <p> {props.children}</p>
        </div>
    );
}

export default person;