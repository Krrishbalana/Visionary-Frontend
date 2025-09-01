import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

function VideoListingPage() {
  // Example dynamic video data
  const videos = [
    {
      id: 1,
      title: "Wild Life in 4K",
      thumbnail: "https://placehold.co/600x300",
      creatorName: "Aliza Jhony",
      creatorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Step into the wild and witness the breathtaking beauty of animals in their natural habitat."
    },
    {
      id: 2,
      title: "React Hooks Explained",
      thumbnail: "https://placehold.co/600x300",
      creatorName: "Krish Balana",
      creatorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Learn about React Hooks, how they work, and why they are so useful in functional components."
    },
    {
      id: 3,
      title: "Node.js Crash Course",
      thumbnail: "https://placehold.co/600x300",
      creatorName: "Jane Doe",
      creatorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "A complete crash course on Node.js for beginners. Learn everything you need to get started."
    },
    {
      id: 4,
      title: "Express.js in Depth",
      thumbnail: "https://placehold.co/600x300",
      creatorName: "John Smith",
      creatorAvatar: "https://randomuser.me/api/portraits/men/76.jpg",
      description: "Dive deep into Express.js and understand middleware, routing, and server-side concepts."
    },
  ];

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
