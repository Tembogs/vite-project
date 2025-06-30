import React, { useState } from 'react';

export default 
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with actual form handling logic
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

