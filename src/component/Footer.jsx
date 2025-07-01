import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router";
export default
function Footer() {
  return (
    <footer className="text-center py-6 bg-teal-500 text-gray-900 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] font-sans">
      <p className="flex flex-col sm:flex-row justify-center items-center text-base m-0 gap-2">
        <span role="img" aria-label="sparkles">✨</span>
        &nbsp;{new Date().getFullYear()}
        <span className="flex italic -mt-2 mr-2">
          <img className="size-6 mt-2.5" src="https://img.icons8.com/?size=160&id=cwGoWVNMgQZg&format=png" alt="" />
          <span className="mt-2 font-serif flex text-lg">
            <span className="text-stone-800 text-shadow-md font-extrabold flex">
              S
              <img className="size-6 " src="https://img.icons8.com/?size=96&id=BewN23wCh-il&format=png" alt="" />
              ft-Bite
            </span>
          </span>
        </span>
        &mdash; All rights reserved.
        &nbsp;<span role="img" aria-label="rocket">🚀</span>
      </p>
      <div className="mt-2 text-sm text-gray-700">
        Made with <span role="img" aria-label="heart">❤️</span> by Tem-bogs.
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-start items-center gap-6 text-sm w-full max-w-5xl mx-auto px-4">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-start font-semibold">
              <li><Link to="/Home" onClick={() => window.scrollTo(0, 0)} className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}>Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}>About</Link></li>
            <li><Link to="/menu" onClick={() => window.scrollTo(0, 0)} className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}>Menu</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className={({isActive}) => isActive ? "text-red-700 font-extrabold" : "hover:text-yellow-300 text-black font-medium transition-colors duration-200"}>Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2 mx-auto">Contact Us</h3>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:info@softbite.com" className="hover:text-blue-600 font-semibold">info@softbite.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-600 font-semibold">+234 70 3829 8493</a></li>
            <li>Location: 123 Food Street, Flavor Town, ile-oluji</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-700">
              <img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
              <img src="https://img.icons8.com/ios-filled/24/000000/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600">
              <img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};