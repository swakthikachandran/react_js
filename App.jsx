import React, { useState } from 'react'

function App() {
  const[tasks,setTask]=useState([])
  const[text,setText]=useState("")
  const add=()=>{
    if(text==="") return;
    setTask(...tasks,{name:text,completed:false})
    setText("")
  }
  return (
    <>
      <h1>TO-DO-LIST</h1>
      <input
       value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Enter Task"
      />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map((task,index)=>(
        <li key={index}>
          {tasks.name}
        </li>))}
      </ul>
    </>
  )
}

export default App
