// react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'

// Styling
import './App.css'
// Component
import Home from './component/Home'
import Register from './component/Register'
import { useState } from 'react'

function App() {
  const[token,setToken]= useState(null)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      {/* <Home />  */}
      {/* <Register /> */} 
      </BrowserRouter>
      </div>
  )
}

export default App
