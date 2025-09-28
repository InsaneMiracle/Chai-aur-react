
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <div className='h-screen w-screen flex justify-center items-center bg-red-800 '>
      <h1 className='font-bold text-9xl'>Greetings HELLO</h1>
    </div>
    </UserContextProvider>
  )
}

export default App
