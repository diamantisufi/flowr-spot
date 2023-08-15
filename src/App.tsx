import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'components/Layout/Layout'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />

        {/* As knowledge of basic Route implementations */}

        {/* <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/flowers' element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
