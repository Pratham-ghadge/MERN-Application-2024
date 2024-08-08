import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/NavBar'
import Logout from './pages/Logout'
import Adminlayout from './components/layouts/Adminlayout'
import AdminUser from './pages/AdminUser'
import AdminContact from './pages/AdminContact'
import AdminUpdate from './pages/AdminUpdate'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className='bg-slate-600'>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/service" element={<Service/>} />
      <Route path ="/contact" element={<Contact/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/register" element={<Register/>} />
      <Route path ="/logout" element={<Logout/>} />
      <Route path='/admin' element={<Adminlayout />}>
        <Route path='user' element={<AdminUser />} />
        <Route path='contact' element={<AdminContact />} />
        <Route path='update/:id' element={<AdminUpdate />} />
      </Route>
      </Routes>
{/* <footer></footer> */}
      </div>
    </BrowserRouter>
    </>
  )
}

export default App