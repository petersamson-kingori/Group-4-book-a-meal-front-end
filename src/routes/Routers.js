import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import LoginCaterer from "../pages/LoginCaterer";
import Register from "../pages/Register";
import RegisterCaterer from "../pages/RegisterCaterer";
import { useState } from "react";
import Reviews from "../components/UI/reviews/reviews";
import { AuthProvider } from "../pages/auth";
import RequireAuth from "../pages/RequireAuth";
import UserProfile from "../pages/UserProfile";
import UserProfileCaterer from "../pages/UserProfileCaterer";
// import ProtectedRoutes from "./proutes";

const Routers = () => {
  const [user, setUser] = useState(null);
  const [caterer, setCaterer] = useState(null);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/foods"
          element={<AllFoods user={user} setUser={setUser} />}
        />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/new" element={<New />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/logout" element={<Login user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/login_caterer" element={<LoginCaterer setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/registerCaterer" element={<RegisterCaterer caterer={caterer} setCaterer={setCaterer} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<RequireAuth><Reviews /></RequireAuth>} />
        <Route path="/profile" element={<UserProfile user={user} setUser={setUser} />} />
        <Route path="/profile_caterer" element={<UserProfileCaterer user={user} setUser={setUser} />} />  
      </Routes>
    </AuthProvider>
  );
};

export default Routers;
