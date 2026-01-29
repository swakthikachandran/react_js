import React, { useEffect, useState } from 'react'

function UserData() {
    const[user,setUser]=useState([])
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUser(data))
    },[])
  return (
    <div className='container'>
        <h1 className="title">user details</h1> 
      <div className='UserData'>
        {user.map((Details)=>(
            <div key={user.id}>
                <p>Name:{Details.name}</p>
                <p>Email:{Details.Email}</p>
                </div>
        ))}
      </div>
    </div>
  )
}

export default UserData
