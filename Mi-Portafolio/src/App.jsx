import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import AboutMe from './pages/AboutMe.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'


function App() {

  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
    </BrowserRouter >
  );
}

export default App;