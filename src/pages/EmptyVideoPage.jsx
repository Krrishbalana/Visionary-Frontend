import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function EmptyVideoPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar fixed on top */}
      <div className="h-16 z-10">
        <Navbar />
      </div>

      {/* Content area takes rest of screen */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-[20%] h-full bg-gray-900 text-white">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="main-content w-[80%] h-full bg-gray-800 text-white p-4 flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
            Visionar
            </h1>

          {/* Message */}
            <p className="text-xl font-semibold flex gap-3 items-center">No videos available<i className="fa-solid fa-poop text-pink-500"></i></p>
            <p className="text-gray-400 mt-2">
              There are no videos here available. Please try to search something else.
            </p>
        </div>
      </div>
    </div>
  )
}

export default EmptyVideoPage
