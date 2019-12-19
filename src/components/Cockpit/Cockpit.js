import React from "react";

const cockpit = (props) => {
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>This works!</p>
      <button onClick={() => props.toggle()}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
