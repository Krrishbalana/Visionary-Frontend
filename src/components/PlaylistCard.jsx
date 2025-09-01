import React from "react";

function PlaylistCard({ title, thumbnail, videos }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition transform cursor-pointer">
      {/* Thumbnail */}
      <div className="relative h-40">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Video Count */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {videos} Videos
        </div>
      </div>

      {/* Playlist Title */}
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
      </div>
    </div>
  );
}

export default PlaylistCard;
