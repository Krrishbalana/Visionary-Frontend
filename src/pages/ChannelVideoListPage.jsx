import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from "react";
import VideoCard from "../components/VideoCard";
import VideoGridCard from "../components/VideoGridCard";

function ChannelVideoListPage() {
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
            <div className="flex items-center gap-5">
              {/* Avatar overlaps cover */}
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

            {/* Subscribe button */}
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold text-white">
              <i className="fa-solid fa-user-plus mr-2"></i> Subscribe
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 px-6 border-b border-gray-700 text-gray-300 font-medium">
            <a className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Videos
            </a>
            <a className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Playlist
            </a>
            <a className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Tweets
            </a>
            <a className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">
              Subscribed
            </a>
          </div>

          {/* Video List - Grid Card View */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                    <VideoGridCard />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelVideoListPage;
