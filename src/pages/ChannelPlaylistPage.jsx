import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import PlaylistCard from '../components/PlaylistCard'
import ChannelEmptyPlaylistPage from './EmptyStates/ChannelEmptyPlaylistPage'

function ChannelPlaylistPage() {
  const playlists = [
    {
      id: 1,
      title: "Frontend Mastery",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
      videos: 14,
    },
    {
      id: 2,
      title: "Backend with Node.js",
      thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
      videos: 9,
    },
    {
      id: 3,
      title: "UI/UX Inspirations",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
      videos: 5,
    },
    {
      id: 4,
      title: "JavaScript Deep Dive",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      videos: 18,
    },
  ]

  // ✅ Show empty state if no playlists
  if (playlists.length === 0) {
    return <ChannelEmptyPlaylistPage />
  }

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
        <div className="w-[80%] h-full bg-gray-800 flex flex-col">
          {/* Fixed Top Section */}
          <div className="flex-shrink-0">
            {/* Top Cover */}
            <div className="relative w-full h-72">
              <img
                src="https://images.unsplash.com/photo-1650513737281-882e597ee5e5?q=80&w=1600&auto=format&fit=crop"
                alt="Channel Cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Owner Section */}
            <div className="flex items-center justify-between px-6 py-6 relative">
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-900 absolute -top-20">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop"
                    alt="Owner Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-40">
                  <h1 className="text-2xl font-bold">Krish Balana</h1>
                  <h2 className="text-gray-400">@krishbalana</h2>
                  <p className="text-sm text-gray-300">
                    Subscribers: <span className="font-semibold">10k</span> •
                    Subscribed: <span className="font-semibold">15</span>
                  </p>
                </div>
              </div>

              {/* Subscribe button */}
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
          </div>

          {/* Scrollable Playlist Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <h2 className="text-xl font-bold mb-4">Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <PlaylistCard
                  key={playlist.id}
                  title={playlist.title}
                  thumbnail={playlist.thumbnail}
                  videos={playlist.videos}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelPlaylistPage
