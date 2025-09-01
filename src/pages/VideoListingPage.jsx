import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

function VideoListingPage() {
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
        <div className="main-content w-[80%] h-full bg-gray-800 p-4 overflow-y-auto">
          {/* Video listing */}
          <div className="flex flex-col gap-5">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoListingPage;
