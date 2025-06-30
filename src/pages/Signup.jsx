import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false)


 
 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
   const handleCheckedBox = () => {
    setClicked((prev) => !prev)
   }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  // Simulated API call
  function fakeSignupApi(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1500);
    });
  }

  // SetInterval example: show a message every 5 seconds after submit
  const [intervalMsg, setIntervalMsg] = useState("");
  const intervalRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setIntervalMsg(""); // Reset message

    // Simulate API call
    await fakeSignupApi(form);

    // Start interval after signup
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIntervalMsg("Welcome! This message appears every 5 seconds.");
      }, 5000);
    }
  }

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <p className="mb-6 text-gray-600 text-sm block">
          Create your account to access exclusive features <span className="mx-auto"> and stay updated!</span> 
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative w-70 mt-2 ">
            <input
              id="name"
              className="w-full p-2 border rounded peer px-3 py-2 border-gray-300 focus:outline-none text-sm  focus:ring-2 focus:ring-green-600 "
              type="text"
              name="name"
              placeholder=""
              value={form.name}
              onChange={handleChange}
              autoComplete="on"
              required
            />
            <label
              htmlFor="name"
              className="text-[0.6rem] absolute left-3  transform -translate-y-1/2 px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-[0.6rem] peer-focus:top-0 peer-focus:text-[0.6rem] font-serif font-bold"
            >
              Name
            </label>
          </div>
          <div className="relative w-70 mt-2  ">
            <input
              id="email"
              className="w-full p-2 border  peer px-3 py-2  border-gray-300 rounded-md focus:outline-none text-sm  focus:ring-2 focus:ring-green-600"
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label
              htmlFor="email"
              className="text-[0.6rem] absolute left-3 transform -translate-y-1/2 px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-[0.6rem] peer-focus:top-0 peer-focus:text-[0.6rem] font-serif font-bold"
            >
              Email
            </label>
          </div>
          <div className="relative w-70 mt-2">
            <input
              id="password"
              className="w-full p-2 border rounded peer px-3 py-2 border-gray-300 focus:outline-none text-sm  focus:ring-2 focus:ring-green-600"
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label
              htmlFor=""
              className="text-[0.6rem] absolute left-3  transform -translate-y-1/2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-[0.6rem] peer-focus:top-0 peer-focus:text-[0.6rem] font-serif font-bold"
            >
              Password
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="mr-2 accent-green-600"
              onClick={handleCheckedBox}
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the <a href="#" className="underline text-blue-600">Terms of Service</a> and <a href="#" className="underline text-blue-600">Privacy Policy</a>
            </label>
          </div>
          <button
            className={`w-full text-white py-2 rounded ${clicked ? 'bg-green-600 cursor-pointer hover:bg-green-700' : 'opacity-60 bg-green-400  font-semibold cursor-not-allowed'} `}
            type="submit"
           
          >
            <a
              href="/home"
              className={`${clicked ? 'cursor-pointer' :  'cursor-not-allowed'}`}
              disabled
              >
              Sign up
            </a>
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-green-700">Signup submitted!</div>
        )}
        {intervalMsg && (
          <div className="mt-2 text-blue-600">{intervalMsg}</div>
        )}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline hover:text-blue-800">
            Log in
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <span className="text-xs text-gray-400 mr-2">or sign up with</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 mx-1">
            Google
          </button>
          <button className="bg-gray-800 text-white px-3 py-1 rounded text-xs hover:bg-gray-900 mx-1">
            GitHub
          </button>
        </div>
      </div>
    </div>  
  );
}