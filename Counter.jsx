import React, { useState } from 'react'

function Counter() {
    const[count , setCount]=useState(0);
    let incre=()=>{ 
        setCount(count+1)
    }
    let decre=()=>{
      setCount(count-1)
    }
    let reset=()=>{
      setCount(0)
    }
  return (
    <div>
        <h2>Counter-app</h2>
        <p>{count}</p>
      <button onClick={incre} >increment</button>
      <button onClick={decre} >decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
