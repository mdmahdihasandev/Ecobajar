import React from 'react'
import { Routes, Route } from "react-router";
import Home from './Pages/Home';
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Mainlayuot from './Components/Layuots/Mainlayuot';
import Forget from './Pages/Forget';
import Reset from './Pages/Reset'
import Category from './Pages/Category';
import Shop from './Components/Shop';

const App = () => {
  return (

    <Routes>
      <Route element={<Mainlayuot />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget/>} />
        <Route path="/reset-password" element={<Reset/>} />
        <Route path="/category" element={<Category/>} />
      </Route>
    </Routes>

  )
}

export default App