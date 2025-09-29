
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className=' w-screen h-screen flex flex-col justify-center items-center gap-4 bg-gray-600'>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
 
  )
}

export default App
