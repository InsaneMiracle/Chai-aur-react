import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
      e.preventDefault();
      console.log(input);
      dispatch(addTodo(input))
      setInput("");
    }
  return (
    <div className=' w-200 flex justify-center bg-slate-800 p-10 rounded-4xl shadow-xl mt-30'>
     <form onSubmit={addTodoHandler}>
      <input 
      type="text" 
      placeholder="Add Todo" 
      className="input w-100  rounded-l-4xl  p-6 shadow-xl mr-1" 
      onChange={(e)=> setInput(e.target.value)}
      value={input}
      />
        <button
        type='submit'
        className='btn rounded-r-4xl w-30 p-6 hover:text-gray-100 text-gray-400'
         >
            Add
            </button>
     </form>   
    </div>
  )
}

export default AddTodo