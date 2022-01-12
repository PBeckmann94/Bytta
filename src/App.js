import React from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/navbar/Header'
import Main from './Pages/Main'
import NavBar from './Components/navbar/Header'
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/profile" element={'profil'}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
