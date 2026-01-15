// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from './outlet/Layout';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';
import './App.css';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import HowItWorksPage from './pages/HowItWorksPage';
import Waitlist from './pages/Waitlist';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (e.g., fetching config, user data, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='features' element={<Features/>} />
          <Route path='how-it-works' element={<HowItWorksPage/>} />
          <Route path='waitlist' element={<Waitlist/>} />
          {/* Add more routes here */}
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;