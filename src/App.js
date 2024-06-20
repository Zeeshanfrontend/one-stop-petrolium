// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TitleUpdater from './TitleUpdater';
// import Services from './pages/Services';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
          <TitleUpdater />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </Router>
    </>
  );
}

export default App;
