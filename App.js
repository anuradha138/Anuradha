import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {

  return(

<Router>
  <Header />
  <Routes>
    <Route path="/About" element ={<About/>} />
    <Route path="/Home" element ={<Home/>} />
    <Route path="/Contact" element ={<Contact/>}/>
  </Routes>
</Router>

  )

}
export default App;



