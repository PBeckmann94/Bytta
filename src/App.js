import React from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/navbar/Header'
import Main from './Pages/Main'
import { NavBar } from './Components/navbar/Header'
import AdminContainer from './Components/adminPanel/AdminContainer'
import AdminPanel from './Pages/AdminPanel'
import Logo from './Components/navbar/Logo'
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/profile" element={'profil'}></Route>
          <Route path="/admin" element={<AdminPanel />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
