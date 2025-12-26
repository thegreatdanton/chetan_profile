import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import AppDetail from './pages/AppDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Subtle Background Gradient */}
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30" style={{
          background: 'radial-gradient(circle at 50% 10%, #2a2a2a 0%, transparent 60%)'
        }}></div>

        <Navbar />

        <main className="pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:appId" element={<AppDetail />} />
            <Route path="/work/:appId/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
