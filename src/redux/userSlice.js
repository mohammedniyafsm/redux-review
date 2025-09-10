import { createSlice, nanoid } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",
    initialState : [
        { name : "niyaf" ,
            id : 1
        }
    ],
    reducers : {
        addUser : (state,action)=>{
            state.push({name : action.payload ,id : nanoid()})
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;