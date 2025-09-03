import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SubscriberCard from "../components/SubscriberCard";
import ChannelEmptySubscribedPage from "./EmptyStates/ChannelEmptySubscribedPage";

function ChannelSubscribedPage() {
  // Example subscriber data (replace with API)
  const subscribers = [
    {
      id: 1,
      name: "Krish Balana",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
      subscribers: "1.5k",
      isSubscribed: true,
    },
    {
      id: 2,
      name: "Aliza Jhony",
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
      subscribers: "3.2k",
      isSubscribed: false,
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
      subscribers: "980",
      isSubscribed: true,
    },
    {
      id: 4,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      subscribers: "2.1k",
      isSubscribed: false,
    },
  ];

  // ✅ Handle empty state
  if (subscribers.length === 0) {
    return <ChannelEmptySubscribedPage />;
  }

  return (
    <div className="w-full h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
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

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-white">
              <i className="fa-solid fa-user-plus mr-2"></i> Follow
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 px-6 border-b border-gray-700 text-gray-300 font-medium">
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">Videos</a>
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">Playlist</a>
            <a href="#" className="hover:text-white py-3 border-b-2 border-transparent hover:border-red-600">Tweets</a>
            <a href="#" className="text-white py-3 border-b-2 border-red-600 font-semibold">Subscribed</a>
          </div>

          {/* Search + Subscribers List */}
          <div className="flex flex-col p-6 flex-1 overflow-y-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search subscribers..."
                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Subscribers grid/list */}
            <div className="flex flex-col gap-4">
              {subscribers.map((sub) => (
                <SubscriberCard
                  key={sub.id}
                  name={sub.name}
                  avatar={sub.avatar}
                  subscribers={sub.subscribers}
                  isSubscribed={sub.isSubscribed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelSubscribedPage;
