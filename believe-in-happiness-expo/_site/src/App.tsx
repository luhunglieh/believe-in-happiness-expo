import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import DefaultLayout from './layouts/DefaultLayout.tsx';
import Home from './pages/Home.tsx';
import { Emotion, Fair, Dance } from './pages/SubPages.tsx';
import Sponsors from './pages/Sponsors.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <DefaultLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emotion" element={<Emotion />} />
            <Route path="/fair" element={<Fair />} />
            <Route path="/dance" element={<Dance />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </AnimatePresence>
      </DefaultLayout>
    </Router>
  );
}
