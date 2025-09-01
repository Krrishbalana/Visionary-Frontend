import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function ChannelEmptyPlaylistPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-black text-white">
      {/* Navbar fixed on top */}
      <div className="h-16 z-10">
        <Navbar />
      </div>

      {/* Content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-[20%] h-full bg-gray-900 overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="w-[80%] h-full bg-gray-800 overflow-y-auto">
          {/* Top Cover */}
          <div className="relative w-full h-64">
            <img
              src="https://images.unsplash.com/photo-1650513737281-882e597ee5e5?q=80&w=1600&auto=format&fit=crop"
              alt="Channel Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Owner Section */}
          <div className="flex items-center justify-between px-6 py-6 relative">
            {/* Left: Avatar + Details */}
            <div className="flex items-center gap-5">
              {/* Avatar bigger & overlapping */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-900 absolute -top-16">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop"
                  alt="Owner Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-36">
                <h1 className="text-2xl font-bold">Krish Balana</h1>
                <h2 className="text-gray-400">@krishbalana</h2>
                <p className="text-sm text-gray-300">
                  Subscribers: <span className="font-semibold">10k</span> •
                  Subscribed: <span className="font-semibold">15</span>
                </p>
              </div>
            </div>

            {/* Right: Subscribe button */}
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold text-white">
              <i className="fa-solid fa-user-plus mr-2"></i> Subscribe
            </button>
          </div>

          {/* Options Tabs */}
          <div className="flex gap-6 px-6 border-b border-gray-700 text-gray-300 font-medium">
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Videos
            </a>
            <a href="#" className="hover:text-white py-3 border-b-2 border-red-600 text-white">
              Playlist
            </a>
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Tweets
            </a>
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Subscribed
            </a>
          </div>

          {/* Empty Playlist State */}
          <div className="flex flex-col items-center justify-center h-[50vh] text-center px-6">
            {/* Logo */}
            <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
              Visionary
            </h1>

            {/* Message */}
            <p className="text-xl font-semibold flex items-center gap-2">
              No playlists available
              <i className="fa-solid fa-list text-yellow-400"></i>
            </p>
            <p className="text-gray-400 mt-2">
              This channel hasn’t created any playlists yet. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelEmptyPlaylistPage
