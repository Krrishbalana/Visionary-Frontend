import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PlaylistCard from "../components/PlaylistCard";
import VideoCard from "../components/VideoCard";
import ChannelEmptyVideoPage from "./EmptyStates/ChannelEmptyVideoPage";

function ChannelPlaylistVideosPage() {
  // Example videos (replace with API data)
  const videos = [
    { id: 1, title: "Intro to React", thumbnail: "https://placehold.co/600x300", views: "1.2M" },
    { id: 2, title: "React Hooks Explained", thumbnail: "https://placehold.co/600x300", views: "980k" },
    { id: 3, title: "Advanced React Patterns", thumbnail: "https://placehold.co/600x300", views: "500k" },
    { id: 4, title: "Node.js Crash Course", thumbnail: "https://placehold.co/600x300", views: "720k" },
    { id: 5, title: "Express.js in Depth", thumbnail: "https://placehold.co/600x300", views: "450k" },
  ];

  // ✅ Show empty state if no videos in playlist
  if (videos.length === 0) {
    return <ChannelEmptyVideoPage />;
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
        <div className="w-[80%] h-full bg-gray-800 flex">
          {/* Left: Playlist details (fixed) */}
          <div className="w-[30%] p-6 border-r border-gray-700 flex-shrink-0 overflow-y-auto space-y-6">
            <PlaylistCard
              title="Frontend Mastery"
              thumbnail="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop"
              videos={videos.length}
            />

            {/* Owner Info */}
            <div className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4 shadow-md">
              <img
                src="https://placehold.co/80x80"
                alt="Owner Avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
              />
              <h1 className="text-lg font-semibold">Krish Balana</h1>
            </div>
          </div>

          {/* Right: Videos list (scrollable full height) */}
          <div className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Playlist Videos</h2>
            <div className="flex flex-col gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  views={video.views}
                  fullWidth // horizontal layout support
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelPlaylistVideosPage;
