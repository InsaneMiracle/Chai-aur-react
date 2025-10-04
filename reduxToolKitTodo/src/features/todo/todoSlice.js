import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[
        {id:nanoid(), title:"Learn Redux Toolkit"},
        {id:nanoid(), title:"Build a Todo App"}
    ]
}

const todoSlice = createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addTodo:(state, action) => {
                const todo = {id:nanoid(), title:action.payload}
                state.todos.push(todo);
            },
            deleteTodo:(state, action)=>{
                state.todos = state.todos.filter(todo => todo.id !== action.payload)

            },
            updateTodo:(state,action)=>{
                state.todos =state.todos.map((todo) =>{
                    if(todo.id === action.payload){
                       return {...todo, title:action.payload.title}
                    }
                    return todo;  
            })
            }
        }
        
    }
)


export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;