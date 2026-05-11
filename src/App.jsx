import React from 'react'
import { Routes, Route } from "react-router";
import Home from './Pages/Home';
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Mainlayuot from './Components/Layuots/Mainlayuot';
import Forget from './Pages/Forget';

const App = () => {
  return (

    <Routes>
      <Route element={<Mainlayuot />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget/>} />
      </Route>
    </Routes>

  )
}

export default App