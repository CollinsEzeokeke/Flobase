import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Navs from './component/Navs'

function App() {
  return(
    <>
      <Router>
        <Navs/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App