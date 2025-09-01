import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition cursor-pointer">
        Visionary
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 
            hover:border-indigo-500 transition"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-700 text-gray-200 rounded-xl hover:bg-gray-600 transition">
          Login
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold 
          hover:bg-indigo-500 hover:scale-[1.02] transition">
          Signup
        </button>
      </div>
    </nav>
  )
}

export default Navbar
