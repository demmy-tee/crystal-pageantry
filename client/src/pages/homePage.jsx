import React from 'react'
import Timer from '../components/timer'
import { images } from '../assets/assets'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images.background})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl sm:text-3xl font-bold text-center pt-4 mb-6">
          CRYSTAL PAGEANTRY
        </h1>
        <div className="flex flex-col justify-center mt-20">
          <h3 className="text-4xl sm:text-5xl font-semibold text-center mb-4 text-gray-100">
            Welcome to Mr And Miss KWASU Pageantry
          </h3>
          <p className="text-center text-lg mb-4 text-gray-100">
            Experience the magic of our crystal creations.
          </p>
        </div>
        <div className=" justify-center mt-20">
          <p className="text-center text-3xl sm:text-4xl mb-4 text-gray-100">Next Event In</p>   
          <Timer targetDate="2025-12-31T23:59:59" className="text-center " />
          <div className='flex flex-col gap-5 p-4 mt-10 sm:flex-row sm:justify-center sm:gap-10'>
            <button  className='bg-primary text-background rounded-lg p-2 text-center'>
              <Link to="/vote" className='bg-primary text-background rounded-lg p-2 text-center'>Vote Now</Link>
            </button>
            <button className='text-gray-400 text-center border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-black transition-colors '>
              <Link to="/register">Register Now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
