import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // optional for navigation



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="*" element={<h2>Route not matched</h2>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
