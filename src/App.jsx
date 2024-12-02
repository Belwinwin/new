import {useState} from 'react'
import User from './user'
import Counter from './counter'
import React from 'react';
function App(){
  const [name] = useState(() => prompt("Enter your name:"));
  return <>
  <h1>welcome!!</h1>
  <User name={name}/>
  <Counter/>
  </>
}

export default App
