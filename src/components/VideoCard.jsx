import React from "react";

function VideoCard({ 
  thumbnail, 
  title, 
  creatorName, 
  creatorAvatar, 
  description 
}) {
  return (
    <div className="flex w-full py-5 px-4 gap-5 hover:bg-gray-800/30 rounded-xl transition">
      {/* Thumbnail */}
      <div className="thumbnail w-[40%] flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-60 object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="content flex flex-col justify-between w-[60%]">
        <h1 className="title text-xl font-semibold text-white line-clamp-2">
          {title}
        </h1>

        {/* Creator Info */}
        <div className="creator flex items-center gap-3 mt-4">
          <div className="creator-avatar w-10 h-10 rounded-full overflow-hidden">
            <img
              src={creatorAvatar}
              alt={creatorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="creator-name text-base text-gray-300">
            {creatorName}
          </div>
        </div>

        {/* Description */}
        <p className="description text-base text-gray-400 mt-3 line-clamp-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
