import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TweetCard from "../components/TweetCard";
import ChannelEmptyTweetPage from "./EmptyStates/ChannelEmptyTweetPage";

function ChannelTweetPage() {
  // Example tweets (replace with API data later)
  const tweets = [
    {
      id: 1,
      username: "Krish Balana",
      handle: "@krishbalana",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
      content: "Just started working on my Visionary project 🚀",
      likes: 120,
    },
    {
      id: 2,
      username: "Krish Balana",
      handle: "@krishbalana",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
      content: "React hooks are game changers 🔥",
      likes: 89,
    },
    {
      id: 3,
      username: "Krish Balana",
      handle: "@krishbalana",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
      content: "Building UI with Tailwind is smooth 💨",
      likes: 54,
    },
  ];

  // ✅ Handle empty tweets case
  if (tweets.length === 0) {
    return <ChannelEmptyTweetPage />;
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
                  Followers: <span className="font-semibold">1.5k</span> •
                  Following: <span className="font-semibold">200</span>
                </p>
              </div>
            </div>

            {/* Right: Follow button */}
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-white">
              <i className="fa-solid fa-user-plus mr-2"></i> Follow
            </button>
          </div>

          {/* Options Tabs */}
          <div className="flex gap-6 px-6 border-b border-gray-700 text-gray-300 font-medium">
            <a
              href="#"
              className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600"
            >
              Videos
            </a>
            <a
              href="#"
              className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600"
            >
              Playlist
            </a>
            <a
              href="#"
              className="text-white py-3 border-b-2 border-red-600 font-semibold"
            >
              Tweets
            </a>
            <a
              href="#"
              className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600"
            >
              Subscribed
            </a>
          </div>

          {/* Tweets Section (scrollable) */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-6">
              {tweets.map((tweet) => (
                <TweetCard
                  key={tweet.id}
                  username={tweet.username}
                  handle={tweet.handle}
                  avatar={tweet.avatar}
                  content={tweet.content}
                  likes={tweet.likes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelTweetPage;
