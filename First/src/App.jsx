import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {


  return (
    <>
    <Header />
    <div className="flex items-center justify-center flex-col h-[60vh] bg-blue-200">
    <h1 className="text-5xl font-bold"> React Demo </h1>
    </div>
    <Footer />
    </>
  )
}

export default App
