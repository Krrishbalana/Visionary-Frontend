import React from "react";

function VideoGridCard({ 
  thumbnail, 
  duration, 
  channelAvatar, 
  title, 
  channelName, 
  views, 
  date 
}) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-44 object-cover"
        />
        {/* Duration */}
        {duration && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {duration}
          </span>
        )}
      </div>

      {/* Video Info */}
      <div className="flex gap-3 p-3">
        {/* Channel Avatar */}
        <img
          src={channelAvatar}
          alt={channelName}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Title & Details */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-white line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{channelName}</p>
          <p className="text-xs text-gray-500">{views} • {date}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoGridCard;
