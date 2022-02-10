import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import ApplyJobCard from './pages/ApplyJobCard';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/applycard' element={<ApplyJobCard />} />
      </Routes>
    </>
  );
}

export default App;
