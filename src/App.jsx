import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Nav';
import Footer from './component/Footer';
import About from './pages/About';
import Chart from './pages/Menu'
import Contact from './pages/Contact';
// import Login from './pages/Login';
import Signup from './pages/signup';
import ContactForm from './pages/form';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Chart />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path='/form' element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
