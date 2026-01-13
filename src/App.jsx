import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import MoneySplitDetail from './pages/work/money-split/Detail';
import MoneySplitPrivacy from './pages/work/money-split/Privacy';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative bg-[var(--bg-primary)]">
          {/* Subtle Background Gradient */}
          <div className="fixed inset-0 z-[-1] pointer-events-none opacity-30 transition-colors duration-300" style={{
            background: 'radial-gradient(circle at 50% 10%, var(--gradient-color) 0%, transparent 60%)'
          }}></div>

          <Navbar />

          <main className="pt-24 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/money-split" element={<MoneySplitDetail />} />
              <Route path="/work/money-split/privacy" element={<MoneySplitPrivacy />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
