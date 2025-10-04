import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch();
    if(todos.length === 0) return null


  return (
    <div className="p-5 w-200 mt-10 flex flex-col items-center justify-center bg-slate-800 rounded-4xl ">
    <h1 className="text-4xl font-bold py-5 text-gray-400">Todos</h1>
    <ul className="flex flex-col gap-8 my-8">
        {todos.map((todo)=>(
            <li key={todo.id} className="flex items-center justify-between rounded-3xl p-2 px-8 w-150 bg-slate-500 "  >
                {todo.title}
                <button 
                onClick={()=> dispatch(deleteTodo(todo.id))}
                > <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 m-2 text-red-500 hover:text-red-800 transition-colors duration-200 cursor-pointer"
    >
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858Z" />
    </svg></button>
            </li>
        ))}     
    </ul>
    </div>
  )
}

export default Todos