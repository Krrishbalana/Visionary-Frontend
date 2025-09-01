import React from 'react'

function SubscriberCard({ name, avatar, subscribers, isSubscribed }) {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4 rounded-2xl shadow-md hover:shadow-lg transition w-full">
      {/* Left side: Avatar + Details */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700">
          <img
            src={avatar}
            alt={`${name} Avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="text-sm text-gray-400">{subscribers} subscribers</p>
        </div>
      </div>

      {/* Right side: Subscribed button */}
      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition ${isSubscribed ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
        {isSubscribed ? (
          <>
            <i className="fa-solid fa-bell mr-2"></i> Subscribed
          </>
        ) : (
          'Subscribe'
        )}
      </button>
    </div>
  )
}

export default SubscriberCard
