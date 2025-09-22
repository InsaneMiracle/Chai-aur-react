
import './App.css'
import Card from './components/Card'

function App() {
  return(
    <>
      <div className=' font-bold text-3xl text-center text-black p-5 w-100 bg-green-300 rounded-lg shadow-lg m-10 mb-20'>
        Hello world!
      </div>
      <div className='flex justify-center items-center gap-10 overflow-x-auto p-10'>
      <Card userName="Yunus" btnText="Read more"/>
      <Card userName= "Jhon" btnText="Click me"/>
      </div>
    </>
  );
}

export default App
