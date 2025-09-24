import { useCallback, useState } from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(6);
  const [password, setpassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (symbolAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let password = "";
    

    for (let i = 1; i<= length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length+1));
       
    }
    setpassword(password);
  },[length, numberAllowed, symbolAllowed, setpassword]);

console.log(password);

      

  
  return (
    <>
    <div className=" w-full max-w-md  mx-auto my-8 rounded-lg shadow-md bg-slate-800 text-white px-4 py-3 text-orange-500">
      <h1 className="text-3xl font-bold text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
        <input
        type="text"
        value={password}
        className="w-full text-lg outline-none py-1 px-3"
        placeholder='Password'
        readOnly
        />
        <button>Copy</button>
      </div>
    </div>

    </>
  )
}

export default App
