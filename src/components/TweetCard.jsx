import React from "react";

function TweetCard({ username, handle, avatar, content, likes }) {
  return (
    <div className="w-full bg-gray-900 rounded-2xl p-4 flex gap-4 shadow-md border border-gray-700">
      {/* Left: Avatar */}
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt={username}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Right: Tweet Content */}
      <div className="flex flex-col flex-1">
        {/* Username + Handle */}
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-white">{username}</h1>
          <span className="text-gray-400 text-sm">{handle}</span>
        </div>

        {/* Tweet Text */}
        <p className="text-gray-200 mt-1">{content}</p>

        {/* Like / Unlike Buttons */}
        <div className="flex gap-6 mt-3 text-gray-400">
          <button className="flex items-center gap-2 hover:text-red-500 transition">
            <i className="fa-solid fa-heart"></i>
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400 transition">
            <i className="fa-solid fa-thumbs-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
