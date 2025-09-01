import React, { useState } from 'react'

function Register() {
  const [avatar, setAvatar] = useState(null)
  const [coverImage, setCoverImage] = useState(null)

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0])
  }

  const handleCoverChange = (e) => {
    setCoverImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('fullname', e.target.fullname.value)
    formData.append('username', e.target.username.value)
    formData.append('email', e.target.email.value)
    formData.append('password', e.target.password.value)
    if (avatar) formData.append('avatar', avatar)
    if (coverImage) formData.append('coverImage', coverImage)

    console.log('Form submitted:', {
      fullname: e.target.fullname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      avatar,
      coverImage,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        {/* Visionary Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-400 tracking-wide hover:text-indigo-300 transition">
            Visionary
          </h1>
        </div>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 hover:border-indigo-500 transition"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 hover:border-indigo-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 hover:border-indigo-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 hover:border-indigo-500 transition"
          />

          {/* Avatar Upload */}
          <div className="flex flex-col">
            <label className="block text-gray-300 mb-2">Avatar</label>
            <label className="cursor-pointer bg-gray-700 hover:bg-indigo-600 text-gray-200 font-medium px-4 py-2 rounded-xl text-center transition">
              Choose Avatar
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
            {avatar && (
              <span className="text-sm text-indigo-400 mt-1">
                {avatar.name}
              </span>
            )}
          </div>

          {/* Cover Image Upload */}
          <div className="flex flex-col">
            <label className="block text-gray-300 mb-2">Cover Image</label>
            <label className="cursor-pointer bg-gray-700 hover:bg-indigo-600 text-gray-200 font-medium px-4 py-2 rounded-xl text-center transition">
              Choose Cover Image
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverChange}
                className="hidden"
              />
            </label>
            {coverImage && (
              <span className="text-sm text-indigo-400 mt-1">
                {coverImage.name}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-500 hover:scale-[1.02] transition"
          >
            Register
          </button>
        </form>

        {/* Already Registered */}
        <p className="mt-6 text-center text-gray-400">
          Already registered?{' '}
          <a
            href="/login"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register
