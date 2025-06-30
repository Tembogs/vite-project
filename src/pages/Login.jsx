import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 ">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <svg className="w-16 h-16 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0e7ff"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0-6v2m-4 4h8" />
          </svg>
          <h2 className="text-3xl font-extrabold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-700 mb-1 text-[0.6rem] absolute left-3 transform -translate-y-1/2 px-1 bg-white  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-[0.6rem] peer-focus:top-0 peer-focus:text-[0.6rem] font-serif font-bold" htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full peer px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-1 text-[0.6rem] absolute left-3 transform -translate-y-1/2 px-1 bg-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-[0.6rem] peer-focus:top-0 peer-focus:text-[0.6rem] font-serif font-bold" htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full peer px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition"
            type="submit"
          >
            Login
          </button>
          <div className="flex justify-between mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            <a href="/" className="text-blue-600 hover:underline">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}