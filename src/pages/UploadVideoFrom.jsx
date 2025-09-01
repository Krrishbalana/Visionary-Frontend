import React, { useState } from "react";

function UploadVideoForm({ onClose, onUpload }) {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!videoFile || !thumbnailFile) {
      alert("Please select both video and thumbnail files!");
      return;
    }

    const newVideo = {
      id: Date.now(),
      title,
      description,
      videoURL: URL.createObjectURL(videoFile),
      thumbnail: URL.createObjectURL(thumbnailFile),
      channelAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      channelName: "Your Channel",
      views: "0 views",
      date: "Just now",
    };

    onUpload(newVideo);
    onClose();

    // reset form
    setVideoFile(null);
    setThumbnailFile(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Upload Video</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Custom Video Upload */}
          <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 transition">
            <span className="text-gray-400 mb-2">
              {videoFile ? videoFile.name : "Select Video File"}
            </span>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="hidden"
              required
            />
          </label>

          {/* Custom Thumbnail Upload */}
          <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-green-500 transition">
            <span className="text-gray-400 mb-2">
              {thumbnailFile ? thumbnailFile.name : "Select Thumbnail Image"}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
              className="hidden"
              required
            />
          </label>

          {/* Video Title */}
          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 rounded-lg bg-gray-900 text-white border border-gray-700"
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 rounded-lg bg-gray-900 text-white border border-gray-700"
            rows={4}
          />

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadVideoForm;
