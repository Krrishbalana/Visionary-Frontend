import React from "react";

function VideoGridCard() {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
          alt="Video Thumbnail"
          className="w-full h-44 object-cover"
        />
        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          12:34
        </span>
      </div>

      {/* Video Info */}
      <div className="flex gap-3 p-3">
        {/* Channel Avatar */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Channel Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Title & Details */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-white line-clamp-2">
            Awesome Video Title Goes Here To Show Card Layout Example
          </h3>
          <p className="text-xs text-gray-400">Krish Balana</p>
          <p className="text-xs text-gray-500">10K views • 2 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoGridCard;
