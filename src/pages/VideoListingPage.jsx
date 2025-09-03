import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import EmptyVideoPage from "../pages/EmptyStates/EmptyVideoPage"; // ✅ Import full empty page

function VideoListingPage() {
  // Example dynamic video data
  const videos = [
    // Leave empty [] to test EmptyVideoPage
    {
      id: 1,
      title: "Wild Life in 4K",
      thumbnail: "https://placehold.co/600x300",
      creatorName: "Aliza Jhony",
      creatorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      description:
        "Step into the wild and witness the breathtaking beauty of animals in their natural habitat.",
    },
  ];

  // ✅ If no videos, show full EmptyVideoPage
  if (videos.length === 0) {
    return <EmptyVideoPage />;
  }

  // ✅ Otherwise, render normal listing
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
          <div className="flex flex-col gap-5">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
                creatorName={video.creatorName}
                creatorAvatar={video.creatorAvatar}
                description={video.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoListingPage;
