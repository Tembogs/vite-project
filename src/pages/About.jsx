import '../App.css';
export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg shadow-md mt-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center mb-6 gap-6">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="FreshBite Delivery"
          className="w-32 h-32 rounded-full shadow-lg object-cover animate-bounce-in"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 animate-slide-in">
            About Our Food Delivery Service
          </h1>
          <p className="text-gray-600 text-lg">
            Fast, fresh, and delicious meals delivered to your door.
          </p>
        </div>
      </div>
      <section className="mb-6">
        <p className="mb-4 text-gray-700">
          Welcome to <span className="font-semibold text-green-600">Soft-Bite</span>, your go-to destination for fast, fresh, and delicious meals delivered right to your door. Our mission is to connect you with your favorite local restaurants and new culinary experiences, all from the comfort of your home.
        </p>
        <p className="mb-4 text-gray-700">
          At <span className="font-semibold text-green-600">Soft-Bite</span>, we believe in quality, convenience, and customer satisfaction. Our easy-to-use platform lets you browse menus, customize your orders, and track your delivery in real time. Whether you're craving comfort food, healthy options, or something new, we've got you covered.
        </p>
        <p className="mb-6 text-gray-700">
          Thank you for choosing <span className="font-semibold text-green-600">Soft-Bite</span>. We’re passionate about bringing great food and great service to your table, every time.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose <span className="font-semibold text-green-600">Soft-Bite</span>?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li>
            <span className="font-semibold text-gray-900">Curated Selection:</span> We partner with the best local restaurants to bring you a diverse range of cuisines and flavors.
          </li>
          <li>
            <span className="font-semibold text-gray-900">Lightning-Fast Delivery:</span> Our dedicated delivery team ensures your food arrives hot and fresh, every time.
          </li>
          <li>
            <span className="font-semibold text-gray-900">Exclusive Offers:</span> Enjoy special deals, discounts, and loyalty rewards as a valued FreshBite customer.
          </li>
          <li>
            <span className="font-semibold text-gray-900">Seamless Experience:</span> From browsing to checkout, our platform is designed for simplicity and ease of use.
          </li>
          <li>
            <span className="font-semibold text-gray-900">24/7 Support:</span> Our support team is always ready to help you with your orders and queries.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">How It Works</h2>
        <div className="grid grid-cols sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-green-50 rounded-lg shadow-sm animate-pop-in hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-2">🍔</div>
            <h3 className="font-bold mb-1">Browse Menu's</h3>
            <p className="text-gray-600 text-sm">Explore a wide variety of cuisines and dishes from top-rated restaurants.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm animate-pop-in delay-100 hover:scale-105 transition-transform duration-300">
            <a href="/menu">
              <div className="text-4xl mb-2">🛒</div>
              <h3 className="font-bold mb-1">Place Your Order</h3>
              <p className="text-gray-600 text-sm">Customize your meal, add to cart, and checkout in just a few clicks.</p>
            </a>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm animate-pop-in delay-200 hover:scale-105 transition-transform duration-300">
            <a href="/delivery">
             <div className="text-4xl mb-2">🚗</div>
              <h3 className="font-bold mb-1">Enjoy Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Track your order in real time and enjoy your meal delivered hot and fresh.</p>
            </a>
          </div>
        </div>
      </section>

      {/* New Content: Our Values */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white animate-pop-in delay-200 hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-4 flex flex-col items-center">
            <span className="text-3xl mb-2 text-green-500">🌱</span>
            <h4 className="font-bold mb-1 text-gray-900">Fresh Ingredients</h4>
            <p className="text-gray-600 text-sm text-center">We prioritize fresh, locally sourced ingredients for every meal.</p>
          </div>
          <div className="bg-white animate-pop-in delay-200 hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-4 flex flex-col items-center">
            <span className="text-3xl mb-2 text-yellow-500">🤝</span>
            <h4 className="font-bold mb-1 text-gray-900">Community Support</h4>
            <p className="text-gray-600 text-sm text-center">Supporting local restaurants and businesses is at the heart of what we do.</p>
          </div>
          <div className="bg-white animate-pop-in delay-200 hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-4 flex flex-col items-center">
            <span className="text-3xl mb-2 text-blue-500">💡</span>
            <h4 className="font-bold mb-1 text-gray-900">Innovation</h4>
            <p className="text-gray-600 text-sm text-center">We constantly improve our platform for a seamless and delightful experience.</p>
          </div>
        </div>
      </section>

      {/* New Content: Customer Testimonials */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">What Our Customers Say</h2>
        <div className="space-y-4">
          <div className="bg-orange-50 rounded-lg p-4 shadow flex items-start gap-3">
            <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
            <div>
              <p className="text-gray-700 text-sm">"Soft-Bite always delivers my food hot and on time. The variety is amazing and the service is top-notch!"</p>
              <span className="block text-xs text-gray-500 mt-1">— Alex P.</span>
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 shadow flex items-start gap-3">
            <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
            <div>
              <p className="text-gray-700 text-sm">"I love supporting local restaurants through Soft-Bite. The app is easy to use and the offers are great!"</p>
              <span className="block text-xs text-gray-500 mt-1">— Maria L.</span>
            </div>
          </div>
        </div>
      </section>

      {/* New Content: Our Partners */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Restaurant Partners</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2">
            <img src="https://img.icons8.com/color/48/000000/pizza.png" alt="Pizza Place" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Pizza Palace</span>
          </div>
          <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2">
            <img src="https://img.icons8.com/color/48/000000/sushi.png" alt="Sushi Bar" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Sushi Bar</span>
          </div>
          <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2">
            <img src="https://th.bing.com/th/id/OIP.GOCuf_IMnwLTBS-6DtIE0AHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Burger Joint" className="w-8 h-8" />
            <span className="font-semibold text-gray-700">Burger Joint</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <p className="text-gray-700 text-center text-lg">
          Join thousands of satisfied customers who trust <span className="font-semibold text-green-600">Soft-Bite</span> for their daily meals.<br />
          <span className="inline-block mt-2 animate-pulse">Discover new favorites, support local businesses, and make every meal memorable with us!</span>
        </p>
      </section>
    </div>
  );
}