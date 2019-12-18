import React from 'react'

const person = (props) => {
    const {name, age, click, change} = props
    return (
        <div>
          <p onClick={click}>Hi! I'm {name} and I am {age} years old!</p>
          <p>{props.children}</p>
          <input type="text" onChange={change} value={name}/>
           {/* <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>  */}
        </div>
    )
}

export default person