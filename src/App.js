import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import LandingPage from './pages/LandingPage';
import ApplyJobCard from './pages/ApplyJobCard';
import ApplyJobCard1 from './pages/ApplyJobCard1';
import About from './pages/About';
import Contact from './pages/Contact';
import ApplyJobCard2 from './pages/ApplyJobCard2';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/applycard' element={<ApplyJobCard />} />
        <Route path='/applycard1' element={<ApplyJobCard1 />} />
        <Route path='/applycard2' element={<ApplyJobCard2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
