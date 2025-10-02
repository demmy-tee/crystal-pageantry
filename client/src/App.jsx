import React from 'react'
import BottomNav from './components/bottomNav'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import HomePage from './pages/homePage';
import Judges from './pages/judges';
import Register from './pages/register';
import Voting from './pages/voting';
export default function App() {
  return (
    <>
      <BottomNav />
      <div className="overflow-y-auto pb-16 h-full">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/judges' element={<Judges />} />
          <Route path='/register' element={<Register />} />
          <Route path='/voting' element={<Voting />} />
        </Routes>
      </div>
    </>
  )
}
