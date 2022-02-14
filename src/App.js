import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
// import Footer from './Components/Footer';
// import LandingPage from './pages/LandingPage';
// import ApplyJobCard from './pages/ApplyJobCard';
// import ApplyJobCard1 from './pages/ApplyJobCard1';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import ApplyJobCard2 from './pages/ApplyJobCard2';

const NavBar = lazy(() => import('./Components/NavBar'))
const Footer = lazy(() => import('./Components/Footer'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const ApplyJobCard = lazy(() => import('./pages/ApplyJobCard'))
const ApplyJobCard1 = lazy(() => import('./pages/ApplyJobCard1'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const ApplyJobCard2 = lazy(() => import('./pages/ApplyJobCard2'))

function App() {
  return (
    <Suspense fallback={<span>Loading</span>}>
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
    </Suspense>
  );
}

export default App;
