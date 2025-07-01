import { useState } from "react";
export default
function Contact() {
  // Form state
  const [form, setForm] =useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const isStatus = status !== "Sending..."

  // Handle input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    // Simulate sending message
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <div className="p-8 text-center shadow bg-gradient-to-br from-yellow-50 to-orange-100 max-w-xl mx-auto -mt-2 mb-2 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
      <p>Email: <span className="text-blue-600">support@foodieexpress.com</span></p>
      <p>Phone: +234 70 3829 8493</p>
      <p>Address: 123 soft-bite Lane, Flavor Town, ile-oluji</p>
      <p>Business Hours: Mon-Fri, 9am - 6pm</p>
      <div className="my-6">
        <h3 className="text-xl font-medium mb-1">Follow us:</h3>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com/foodieexpress" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover">
            Facebook
          </a>
          <a href="https://twitter.com/foodieexpress" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover">
            Twitter
          </a>
          <a href="https://instagram.com/foodieexpress" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover">
            Instagram
          </a>
        </div>
        <h3 className="text-xl font-medium mb-1">Send us a message:</h3>
        <form className="flex flex-col items-center space-y-3 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded px-3 py-2 w-full outline-none"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2 w-full outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border rounded px-3 py-2 w-full outline-none"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={status === "Sending..."}
          >
            {status === "Sending..." ? "Sending..." : "Send"}
          </button>
          { isStatus && (
            <div className="text-green-600 mt-2">{status}</div>
          )}
        </form>
      </div>
      <div className="mt-8 text-sm text-gray-500">
        <p>Looking for partnership opportunities? <a href="mailto:partners@soft-bite.com" className="text-blue-600 hover:underline">Email our partnerships team</a>.</p>
        <p className="mt-2">For press inquiries, contact <a href="mailto:press@soft-bite.com" className="text-blue-600 hover:underline">press@soft-bite.com</a>.</p>
      </div>
    </div>
  );
}
