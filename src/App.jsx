// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// Styling
import "./App.css";
// Component
import Home from "./component/Home";
import Register from "./component/Register";
import { useState } from "react";
import Login from "./component/Login";
import Account from "./component/Account";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";
import Checkout from "./component/Checkout";
import Carts from "./component/Cart";
import Category from "./component/Category";
import { useEffect } from "react";
import { setToCart } from "./cartSlice";
import { useDispatch } from "react-redux";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || null;
  });
  const [cartItems, setCartItems] = useState(() => {
    const stoaredCartItems = localStorage.getItem("cartItems");
    return stoaredCartItems ? JSON.parse(stoaredCartItems) : [];
  });
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  console.log("token", token);
  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar token={token} setToken={setToken} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUserId={setUserId} />}
          />
          <Route
            path="/account/:id"
            element={<Account token={token} userId={userId} />}
          />
          <Route path="/productlist" element={<ProductList />} />
          <Route
            path="/productdetails/:id"
            element={
              <ProductDetails
                token={token}
                userId={userId}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Carts
                token={token}
                userId={userId}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
