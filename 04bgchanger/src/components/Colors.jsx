import '../App.css'

function Colors({name}) {
    const change = () => {
        console.log(name);
        document.getElementById('main').style.backgroundColor = name;
    }

    const colorsList = {
        red: "bg-red-500 hover:bg-red-700 text-white font-bold",
        blue: "bg-blue-500 hover:bg-blue-700 text-white font-bold",
        green: "bg-green-500 hover:bg-green-700 text-white font-bold",
        yellow: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold",
        purple: "bg-purple-500 hover:bg-purple-700 text-white font-bold",
        black: "bg-black hover:bg-gray-800 text-white font-bold",
        white: "bg-white hover:bg-gray-200 text-black font-bold border",
        pink: "bg-pink-500 hover:bg-pink-700 text-white font-bold",
        orange: "bg-orange-500 hover:bg-orange-700 text-white font-bold"
    }
    let btnColor = colorsList[name];
  return (
    <button className={` ${btnColor} border-1 rounded-4xl  px-8 py-2 flex justify-center items-center`} onClick={change}>{name}</button>
  )
}

export default Colors