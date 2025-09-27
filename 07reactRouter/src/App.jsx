
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />

      </Route>   
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
