import { FaUtensils, FaTruck, FaSmile } from "react-icons/fa";
import { useLocation } from "react-router";
import Navbar from "../component/Nav";



export default function Home() {

  const location = useLocation();
  const name = location.state?.name || 'Guest';
  return (
    <div className="p-8 text-center bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen flex flex-col items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Delicious food"
        className="rounded-2xl shadow-lg mb-8 w-full max-w-2xl h-64 object-cover object-center"
      />
      <h1 className="text-5xl font-extrabold mb-6">
        <span className="inline-flex items-center gap-2">
          <FaUtensils className="text-orange-500 animate-bounce" />
          {`Welcome to Soft-Bite, ${name}`}
        </span>
      </h1>
      <p className="text-xl mb-8 text-gray-700">
        Delicious food delivered to your door.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
            alt="Fresh Food"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <a href="/app" className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaUtensils className="text-orange-400" /> Fresh Meals
          </a>
          <p className="text-gray-600">Enjoy a variety of cuisines made fresh daily.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            alt="Fast Delivery"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaTruck className="text-green-400" /> Fast Delivery
          </h2>
          <p className="text-gray-600">Get your food delivered hot and on time.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            alt="Happy Customers"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaSmile className="text-yellow-400" /> Happy Customers
          </h2>
          <p className="text-gray-600">Thousands of satisfied customers every day.</p>
        </div>
      </div>

      {/* How It Works Section */}
        <section className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">How It Works</h2>
          <ol className="flex flex-col md:flex-row gap-6 justify-center items-center ">
            <li className="bg-white rounded-lg shadow-md p-4 flex-1 ">
              <span className="block text-4xl font-bold text-orange-400 mb-2">1</span>
              <p className="font-semibold">Browse Menus</p>
              <p className="text-gray-600">Choose from a wide range of restaurants and dishes.</p>
            </li>
            <li className="bg-white rounded-lg shadow-md p-4 flex-1">
              <span className="block text-4xl font-bold text-orange-400 mb-2">2</span>
              <p className="font-semibold">Place Your Order</p>
              <p className="text-gray-600">Add your favorite meals to the cart and checkout easily.</p>
            </li>
            <li className="bg-white rounded-lg shadow-md p-4 flex-1">
              <span className="block text-4xl font-bold text-orange-400 mb-2">3</span>
              <p className="font-semibold">Enjoy Delivery</p>
              <p className="text-gray-600">Sit back and relax while we deliver to your doorstep.</p>
            </li>
          </ol>
        </section>

        {/* Popular Restaurants Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" alt="Restaurant 1" className="rounded-lg w-32 h-24 object-cover mb-3" />
          <h3 className="font-semibold text-lg mb-1">Urban Bites</h3>
          <span className="text-orange-500 font-bold">⭐ 4.8</span>
          <p className="text-gray-500 text-sm mt-1">Burgers, Fast Food</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://th.bing.com/th/id/OIP.bqTa4AUXIYqlnq6W9F8zAAHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Restaurant 2" className="rounded-lg w-32 h-24 object-cover mb-3" />
          <h3 className="font-semibold text-lg mb-1">Green Bowl</h3>
          <span className="text-orange-500 font-bold">⭐ 4.7</span>
          <p className="text-gray-500 text-sm mt-1">Healthy, Salads</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Restaurant 3" className="rounded-lg w-32 h-24 object-cover mb-3" />
          <h3 className="font-semibold text-lg mb-1">Pasta House</h3>
          <span className="text-orange-500 font-bold">⭐ 4.9</span>
          <p className="text-gray-500 text-sm mt-1">Italian, Pasta</p>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="max-w-2xl mx-auto mb-12 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-orange-600">Get Our App</h2>
            <p className="text-gray-700 mb-4">Order food on the go! Download our app for the best experience.</p>
            <div className="flex gap-4">
          <a href="/form" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.564 13.84c-.03-3.18 2.59-4.7 2.7-4.77-1.47-2.15-3.76-2.45-4.57-2.48-1.95-.2-3.8 1.14-4.79 1.14-.99 0-2.52-1.12-4.15-1.09-2.13.03-4.1 1.24-5.19 3.16-2.22 3.85-.57 9.54 1.58 12.67 1.05 1.51 2.3 3.2 3.95 3.14 1.6-.07 2.2-1.01 4.13-1.01 1.93 0 2.47.98 4.16.95 1.72-.03 2.8-1.54 3.84-3.06 1.21-1.77 1.71-3.49 1.73-3.58-.04-.02-3.3-1.27-3.33-5.04zm-4.09-9.23c.87-1.06 1.46-2.54 1.3-4.02-1.26.05-2.78.84-3.68 1.9-.81.95-1.52 2.48-1.25 3.94 1.47.11 2.99-.75 3.63-1.82z"/></svg>
            App Store
          </a>
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.564 13.84c-.03-3.18 2.59-4.7 2.7-4.77-1.47-2.15-3.76-2.45-4.57-2.48-1.95-.2-3.8 1.14-4.79 1.14-.99 0-2.52-1.12-4.15-1.09-2.13.03-4.1 1.24-5.19 3.16-2.22 3.85-.57 9.54 1.58 12.67 1.05 1.51 2.3 3.2 3.95 3.14 1.6-.07 2.2-1.01 4.13-1.01 1.93 0 2.47.98 4.16.95 1.72-.03 2.8-1.54 3.84-3.06 1.21-1.77 1.71-3.49 1.73-3.58-.04-.02-3.3-1.27-3.33-5.04zm-4.09-9.23c.87-1.06 1.46-2.54 1.3-4.02-1.26.05-2.78.84-3.68 1.9-.81.95-1.52 2.48-1.25 3.94 1.47.11 2.99-.75 3.63-1.82z"/></svg>
            Google Play
          </a>
            </div>

          </div>
          <img src="https://codetheorem.co/blogs/wp-content/uploads/2022/10/Food-Delivery-App.jpg" alt="Mobile App" className="w-32 h-32 object-cover rounded-xl shadow-md" />
        </section>

        
      <div className="mb-8">
        <a
          href="/menu"
          className="inline-block bg-orange-500 hover:bg-orange-600 hover:scale-110  text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all ease-in-out duration-700"
        >
          Order Now
        </a>
      </div>

      {/* Testimonials */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <blockquote className="bg-white rounded-lg shadow p-4 flex-1">
            <p className="italic text-gray-700 mb-2">
              “The food always arrives hot and fresh. Love the variety!”
            </p>
            <footer className="text-sm text-gray-500">— Alex P.</footer>
          </blockquote>
          <blockquote className="bg-white rounded-lg shadow p-4 flex-1">
            <p className="italic text-gray-700 mb-2">
              “Fast delivery and great customer service. Highly recommend!”
            </p>
            <footer className="text-sm text-gray-500">— Jamie L.</footer>
          </blockquote>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="max-w-3xl mx-auto mt-12 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Did You Know?</h2>
        <ul className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <li className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="block text-3xl font-bold text-orange-400 mb-2">🍕</span>
            <p className="font-semibold">Over 10,000 meals delivered every month!</p>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="block text-3xl font-bold text-orange-400 mb-2">🌍</span>
            <p className="font-semibold">Serving happy customers in 15+ cities.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-4 flex-1">
            <span className="block text-3xl font-bold text-orange-400 mb-2">🥗</span>
            <p className="font-semibold">100+ menu options for every taste and diet.</p>
          </li>
        </ul>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Stay Updated!</h2>
        <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-orange-200 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-500 mt-2 text-sm">Get exclusive offers and updates in your inbox.</p>
      </section>
    </div>
  );
}