import React from 'react'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log('Login attempt:', { email, password })
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

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 
              hover:border-indigo-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-100 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 
              hover:border-indigo-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold 
              hover:bg-indigo-500 hover:scale-[1.02] transition"
          >
            Login
          </button>
        </form>

        {/* Not Registered Yet */}
        <p className="mt-6 text-center text-gray-400">
          Don’t have an account?{' '}
          <a
            href="/register"
            className="text-indigo-400 font-medium hover:text-indigo-300 transition"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
