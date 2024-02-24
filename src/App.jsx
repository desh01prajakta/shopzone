// react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'
// Styling
import './App.css'
// Component
import Home from './component/Home'
import Register from './component/Register'
import { useState } from 'react'
import Login from './component/Login'

function App() {
  const[token,setToken]= useState(null)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/register" element = {<Register setToken={setToken} />}/>
        <Route path = "/login" element = {<Login setToken={setToken}/>}/>
      </Routes>
     </BrowserRouter>
      </div>
  )
}

export default App
