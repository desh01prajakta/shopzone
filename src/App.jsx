import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
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
import { useEffect } from "react";
import LastPage from "./component/LastPage";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || null;
  });
  const [cartItems, setCartItems] = useState(() => {
    const stoaredCartItems = localStorage.getItem("cartItems");
    return stoaredCartItems ? JSON.parse(stoaredCartItems) : [];
  });
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="lastpage" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
