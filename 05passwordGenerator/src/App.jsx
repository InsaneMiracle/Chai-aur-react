import { use, useCallback, useEffect, useId, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import CrossIcon from "./assets/cross-circle-svgrepo-com.svg";

function App() {
  const [length, setlength] = useState(6);
  const [password, setpassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [savedPassword, setSavedPassword] = useState([]);

  const passowrdRef = useRef(null);

  const CloseIcon = ({ onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 m-2 text-amber-400 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
    >
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858Z" />
    </svg>
  );

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

    const deletePassword = useCallback((passToDelete) => {
    setSavedPassword(prev => prev.filter(p => p !== passToDelete));
    toast.success("Password deleted.");
  }, []);


  const copyPasswordToClipboard = useCallback(() => {
    if (savedPassword.length < 5) {
      if (!savedPassword.includes(password)) {
        setSavedPassword((prev) => [...prev, password]);
        window.navigator.clipboard.writeText(password);
        toast.success("Password Copied to ClipBoard!");
      } else {
        toast.error("Password is already in your clipboard");
      }
    } else {
      toast(
        "Sorry, can not Generate more than 5 Passwords \n please delete an old password",
        {
          duration: 3000,
        }
      );
    }
    passowrdRef.current.focus();
    passowrdRef.current.select();
    passowrdRef.current?.setSelectionRange(0, 100);
  }, [password, savedPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <>
      <div className="min-h-screen bg-slate-900 flex flex-col items-center  font-sans text-zinc-500 ">
        <Toaster />
        <div className=" w-full max-w-xl  mt-40 mx-auto my-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-slate-900 p-8 text-zinc-500 font-sans transition-all duration-300">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Password Generator
          </h1>
          <div className="flex shadow-lg rounded-xl  mb-6">
            <input
              type="text"
              value={password}
              className="w-full text-lg outline-none bg-slate-800 py-3 px-4 selection:bg-amber-400 selection:text-white focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-l-lg focus:shadow-lg focus:shadow-amber-300/20 transition-all duration-300"
              placeholder="Password"
              readOnly
              ref={passowrdRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className=" outline-none bg-amber-400 py-3 px-6 text-slate-900 font-bold shrink-0 rounded-r-lg transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-400/30  focus:shadow-lg focus:shadow-amber-400/30 focus:bg-amber-500"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-6 justify-center items-center">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer accent-amber-400 h-1.5 w-48 transition-all duration-300"
                onChange={(e) => setlength(e.target.value)}
              />
              <label className="text-zinc-300">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={(e) => setNumberAllowed((prev) => !prev)}
                className="accent-amber-400 cursor-pointer"
              />
              <label htmlFor="numberInput"> Numbers</label>
            </div>

            <div className="flex items-center gap-x-1 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                defaultChecked={symbolAllowed}
                id="symbolInput"
                onChange={(e) => setSymbolAllowed((prev) => !prev)}
                className="accent-amber-400 cursor-pointer"
              />
              <label htmlFor="symbolInput"> Characters</label>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center w-full max-w-xl rounded-2xl  mx-auto mt-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-slate-900 p-8 text-zinc-500 font-sans transition-all duration-300 ">
          <h1 className="text-2xl font-bold  mb-6"> SAVED PASSWORDS</h1>
          {savedPassword.length > 0 ? (
            savedPassword.map((e, index) => (
              <div key={index} className="flex w-108 items-center justify-evenly my-2 bg-slate-800 rounded-lg">
                <input
                  type="text"
                  value={e}
                  readOnly
                  className=" sticky w-100 text-lg outline-none bg-slate-800 py-3 px-4 selection:bg-amber-400 selection:text-white focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-lg focus:shadow-2xl focus:shadow-amber-300/20 transition-all duration-300"
                />
                <CloseIcon  onClick={() => deletePassword(e)}/>
              </div>
            ))
          ) : (
            <h2 className="font-white">No passwords saved yet</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
