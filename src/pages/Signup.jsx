import { useState } from "react";
import { useNavigate } from 'react-router-dom';




export default function Signup() {
  const [form, setForm] = useState({ name: "Tembogs", email: "", password: "" });
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate();
  const [profile , setProfile] = useState(false);



 
 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
   const handleCheckedBox = () => {
    setClicked((prev) => !prev)
   }
    
  //  prevent the button from navigating into home without clicking on the checkedbox first
   const handleSignUp = (e) => {
    e.preventDefault();
    if (form.name === 'Tembogs' && form.email ==='temmytizzy201@gmail.com' && form.password === 'Tembogs' && clicked) {
      localStorage.setItem =('isLogged', 'true');
      navigate('/home', { state: { name: form.name } });
      setProfile(true)
      alert('Login Successful')
    } else {
      alert ('invalid credentials')
    }
    
  }; 

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{`Welcome`}</h2>
        <p className="mb-6 text-gray-600 text-sm block">
          Create your account to access exclusive features <span className="mx-auto"> and stay updated!</span> 
        </p>
        <form className="space-y-4">
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
            onClick={handleSignUp}
            disabled={!clicked}
          >
            Get started
          </button>
        </form>
        {/* <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline hover:text-blue-800">
            Log in
          </a>
        </div> */}
      </div>
    </div>  
  );
}