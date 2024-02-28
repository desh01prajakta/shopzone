// react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'
// Styling
import './App.css'
// Component
import Home from './component/Home'
import Register from './component/Register'
import { useState } from 'react'
import Login from './component/Login'
import Account from './component/Account'
import Navbar from './component/Navbar'
import ProductList from './component/ProductList'
import ProductDetails from './component/ProductDetails'
import Cart from './component/Carts'

function App() {
  const[token,setToken]= useState(null);
  console.log("token", token);
  return (
    <div>
      <BrowserRouter>
      <Navbar token={token} setToken={setToken}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/register" element = {<Register setToken={setToken} />}/>
        <Route path = "/login" element = {<Login setToken={setToken}/>}/>
        <Route path = "/account" element = {<Account token={token} />}/>
        <Route path = "/productlist" element = {<ProductList />}/>
        <Route path = "/productdetails/:id" element = {<ProductDetails />}/>
        <Route path = "/cart" element = {<Cart />}/>
              </Routes>
     </BrowserRouter>
      </div>
  )
}

export default App
