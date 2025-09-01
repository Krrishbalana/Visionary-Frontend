import React from 'react'

function Sidebar() {
  return (
    <div className="h-full overflow-y-auto w-64 bg-gray-900 text-gray-200 flex flex-col justify-between p-4">
      {/* Top Links */}
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-house"></i>
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-heart"></i>
          Liked Videos
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-clock-rotate-left"></i>
          History
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-video"></i>
          My Content
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-folder-closed"></i>
          Collections
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-user-check"></i>
          Subscribers
        </a>
      </div>

      {/* Bottom Links */}
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-gear"></i>
          Settings
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition"
        >
          <i className="fa-solid fa-phone"></i>
          Support
        </a>
      </div>
    </div>
  )
}

export default Sidebar
