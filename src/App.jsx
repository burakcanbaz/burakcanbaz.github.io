import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import NavbarBigger from './components/NavbarBigger';
import { useRef } from 'react';


function App() {

  const bodyDiv = useRef()

  return (

    <div ref={bodyDiv}>
      {/* <Navbar/> */}
      <NavbarBigger/>
      <Routes>
        <Route exact path='/' element={<Home bodyDiv={bodyDiv}/>}/>
        <Route path='/aboutMe' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
      
    </div>

  )
}

export default App
