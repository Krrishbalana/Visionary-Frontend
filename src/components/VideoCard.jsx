import React from "react";

function VideoCard() {
  return (
    <div className="flex w-full py-5 px-4 gap-5 hover:bg-gray-800/30 rounded-xl transition">
      {/* Thumbnail */}
      <div className="thumbnail w-[40%] flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1755519371418-2e0737bbfc9b?q=80&w=800&auto=format&fit=crop"
          alt="Video Thumbnail"
          className="w-full h-60 object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="content flex flex-col justify-between w-[60%]">
        <h1 className="title text-xl font-semibold text-white line-clamp-2">
          Wild life of animals in 4K video
        </h1>

        {/* Creator Info */}
        <div className="creator flex items-center gap-3 mt-4">
          <div className="creator-avatar w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
              alt="Creator Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="creator-name text-base text-gray-300">
            Aliza Jhony
          </div>
        </div>

        {/* Description */}
        <p className="description text-base text-gray-400 mt-3 line-clamp-4 leading-relaxed">
          Step into the wild and witness the breathtaking beauty of animals in
          their natural habitat, captured in this stunning wildlife video.
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
