import React from 'react'
import BottomNav from './components/bottomNav'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import HomePage from './pages/homePage'
export default function App() {
  return (
    <>
      <BottomNav />
      <div className="overflow-y-auto pb-16 h-full">
        <Routes>
          <Route path='/' element={<HomePage />} />
          
        </Routes>
      </div>
    </>
  )
}
