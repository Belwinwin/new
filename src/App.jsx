import {useState,React} from 'react'
import User from './user'
import Counter from './counter'
import ImageContainer from './ImageContainer';


function App(){
  const [name] = useState(() => prompt("Enter your name:"));
  return <>
  <h1>welcome!!</h1>
  <User name={name}/>
  <Counter/>
  <ImageContainer/>
  </>
}

export default App
