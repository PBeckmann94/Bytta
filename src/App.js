import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import { NavBar } from './Components/navbar/Header'
import AdminPanel from './Pages/AdminPanel'

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
