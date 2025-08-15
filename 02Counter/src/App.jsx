import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;
  function add()
  {
    console.log("counter", counter);
    
    counter++;
    const h1 = document.querySelector("h2");
    h1.innerHTML = `counter ${counter}`;
  }
  function remove()
  {
    console.log("counter", counter);
    counter--;
    const h1 = document.querySelector("h2");
    h1.innerHTML = `counter ${counter}`;
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value :  {counter}</h2>
     <button onClick={add}>Add value</button>
     <br/>
     <button onClick={remove}>remove value</button>
    </>
  )
}

export default App
