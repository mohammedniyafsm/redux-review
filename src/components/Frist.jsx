import React, { useState } from 'react'
import { useDispatch,  } from 'react-redux';
import { addUser } from '../redux/userSlice';
import Second from './Second';

function Frist() {

    const [value,setValue] = useState("");
    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser(value));
        setValue("")
    }
  return (
    <div>
        <h1>Add User Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <Second/>
    </div>
  )
}

export default Frist
