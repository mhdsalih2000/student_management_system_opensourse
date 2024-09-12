import { useState } from 'react'
import Home from './pages/SignupPage'
import './App.css'
import {  Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Otppage from './pages/OtpPage/Otppage';
import AdminPage from './pages/AdminDB/AdminPage';




function App() {

  return (
    <>
  <Routes>
      <Route>
      <Route path='/admin' element = {<AdminPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/varify-otp" element={<Otppage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
