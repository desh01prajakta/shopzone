// react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
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
import Carts from './component/Cart'
import Category from './component/Category';
import { useDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { setToCart } from './cartSlice';


function App() {
  const[token,setToken]= useState(null);
  const[userId, setUserId] = useState(null)
  const [cartItems,setCartItems] = useState([]);
  const [id,setId] =useState(null)
  const dispatch = useDispatch()
  console.log("token", token);
useEffect(() => {
  async function getItems(){
    const res  = await fetch (`https://fakestoreapi.com/carts`)
    const json = await res.json();
    dispatch(setToCart(json))
  }
  getItems()
}, [])

return (
    <div>
      <BrowserRouter>
      <Navbar token={token} setToken={setToken}/>
          
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/register" element = {<Register setToken={setToken} />}/>
        <Route path = "/login" element = {<Login setToken={setToken} setUserId= {setUserId}/>}/>
        <Route path = "/account/:id" element = {<Account token={token} userId={userId}/>}/>
        <Route path = "/productlist" element = {<ProductList />}/>
        <Route path = "/productdetails/:id" element = {<ProductDetails token={token} cartItems={cartItems} setCartItems={setCartItems} />}/>
        {/* <Route path = "/carts" element = {<carts />}/> */}
        <Route path = "/cart" element = {<Carts token={token} id= {id} cartItems={cartItems} setCartItems={setCartItems} />}/>
        
        </Routes>
     </BrowserRouter>
     
      </div>
  )
}

export default App
