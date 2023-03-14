import React,{ useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './components/Main';
import Story from "./components/Story"
import Host from "./components/Host"
import Accomidation from "./components/Accomidation"
import Facilities from "./components/Facilities"
import Gallery from "./components/Gallery"
import Attraction from "./components/Attraction"
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Scrollup from './components/Scrollup';

const App = () => {
 
 
  return (
    <Router>
    <Header />
      <Routes>
      
      <Route exact path='/' element={<Main/>} />
      <Route exact path="/story" element={<Story />} />
      <Route exact path="/host" element={<Host />} />
      <Route exact path="/accomidation" element={<Accomidation />} />
      <Route exact path="/facilities" element={<Facilities />} />
      <Route exact path="/Gallery" element={<Gallery />} />
      <Route exact path="/Attraction" element={<Attraction />} />
      <Route exact path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
      <Scrollup />
    </Router>
        
        

  )
}

export default App
