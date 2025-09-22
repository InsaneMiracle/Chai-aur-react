import './App.css'
import Colors from './components/Colors'

function App() {

  return (
    <>
      <div id ='main' className='flex justify-center items-end w-screen h-screen '>
        
          <div className='px-10 py-5 bg-gray-200 mb-10 rounded-4xl flex gap-5 justify-around items-center'>
           <Colors name ="red" />
           <Colors name = "blue" />
           <Colors name = "green" />
           <Colors name = "yellow" />
           <Colors name = "orange" />
           <Colors name = "purple" />
           <Colors name = "black" />
           <Colors name = "pink" />
         </div>
      </div>
    </>
  )
}

export default App
