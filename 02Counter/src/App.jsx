import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 20){ 
    setCount(count + 1)
    }
    else{
      setCount(20)
      alert("You can not increase more than 20")
    }
  }

  const decreaseValue = () => {
    if(count >= 0){
    setCount(count - 1)
    }
    else{
      setCount(0)
      alert("You can not decrease more than 0")
    }
  }
  return (
    <>
     <div>
      <h1>Counter : {count}</h1>
      {count === 0 ? <h3 style={{color:"red"}}>Minimum value reached</h3> : null}
      {count === 20 ? <h3 style={{color:"green"}}>Maximum value reached</h3> : null}
     </div>
     <button onClick={addValue}>Increase {count}</button>
     <br /><br />
     <button onClick={decreaseValue}>Decrease {count}</button>
    </>
  )
}

export default App
