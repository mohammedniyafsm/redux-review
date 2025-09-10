import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Second() {
    const data = useSelector((state)=> state.user);

    useEffect(()=>{
        console.log(data)
    },[data])

  return (
    <div>
        <h1>User Data</h1>
        {data.map((s)=>(
            <h1>{s.name}</h1>
        ))}
      
    </div>
  )
}

export default Second
