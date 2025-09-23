import { useState } from "react"

function App() {

  const [color, setColor] = useState('white');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-900" style={{backgroundColor: color}}>
      <div className=" bg-gray-300 rounded-lg shadow-lg fixed flex  justify-center flex-wrap gap-4 px-8 py-4 bottom-12 inset-x-0 mx-auto w-fit">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"  onClick={()=>setColor('blue')} >Blue</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400" onClick={()=>setColor('red')} >Red</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400" onClick={()=>setColor('green')} >Green</button>
        <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400" onClick={()=>setColor('pink')} >Pink</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={()=>setColor('orange')} >Orange</button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400" onClick={()=>setColor('purple')} >Purple</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" onClick={()=>setColor('yellow')} >Yellow</button>
      </div>
    </div>
  )
}

export default App
