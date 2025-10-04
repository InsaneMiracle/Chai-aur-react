import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className=' flex flex-col items-center  h-screen bg-gray-600'>
      <AddTodo />
      <Todos />
    </div>
   
  )
}

export default App
