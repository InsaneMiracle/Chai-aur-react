import { use, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(6);
  const [password, setpassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const passowrdRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (symbolAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = "";


    for (let i = 1; i <= length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length + 1));
    }
    setpassword(password);
  }, [length, numberAllowed, symbolAllowed, setpassword]);



  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passowrdRef.current.focus();
    passowrdRef.current.select();
    passowrdRef.current?.setSelectionRange(0,100);

  }, [password]);



  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);


  return (
    <>
      <div className=" w-full max-w-lg  mx-auto my-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-slate-900 p-8 text-zinc-500 font-sans transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Password Generator</h1>
        <div className="flex shadow-lg rounded-xl  mb-6">
          <input
            type="text"
            value={password}
            className="w-full text-lg outline-none bg-slate-800 py-3 px-4 selection:bg-amber-400 selection:text-white focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-l-lg focus:shadow-lg focus:shadow-amber-300/20 transition-all duration-300"
            placeholder='Password'
            readOnly
            ref={passowrdRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className=' outline-none bg-amber-400 py-3 px-6 text-slate-900 font-bold shrink-0 rounded-r-lg transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-400/30  focus:shadow-lg focus:shadow-amber-400/30 focus:bg-amber-500'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-6 justify-center items-center'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer accent-amber-400 h-1.5 w-48 transition-all duration-300'
              onChange={e => setlength(e.target.value)}
            />
            <label className="text-zinc-300" >Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 cursor-pointer hover:text-white'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={e => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput' > Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 cursor-pointer hover:text-white'>
            <input type="checkbox"
              defaultChecked={symbolAllowed}
              id='symbolInput'
              onChange={e => setSymbolAllowed(prev => !prev)}
            />
            <label htmlFor='symbolInput' > Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
