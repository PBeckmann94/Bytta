import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import { NavBar } from './Components/navbar/Header'
import AdminPanel from './Pages/AdminPanel'
import SignIn from './Pages/SignIn'
import Messages from './Pages/Messages'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/profile" element={'profil'}></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
