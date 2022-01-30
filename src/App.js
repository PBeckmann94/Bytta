import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import { NavBar } from './Components/navbar/Header'
import AdminPanel from './Pages/AdminPanel'
<<<<<<< HEAD
import SignIn from './Pages/SignIn'
=======
>>>>>>> 0438296de4a6b947cfdae087b23f8ee428ad3763

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/profile" element={'profil'}></Route>
          <Route path="/admin" element={<AdminPanel />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
