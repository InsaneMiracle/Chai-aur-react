import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[
        {id:nanoid(), title:"Learn Redux Toolkit", completed:false},
        {id:nanoid(), title:"Build a Todo App", completed:true}
    ]
}

const todoSlice = createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addTodo:(state, action) => {
                state.todos.push({id:nanoid(), title:action.payload, completed:false})
            }
        }
        
    }
)