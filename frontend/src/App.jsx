import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'));
const Partners = lazy(() => import('./pages/Partners.jsx'));
const Problems = lazy(() => import('./pages/Problems.jsx'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin w-10 h-10 border-4 border-accent-primary border-t-transparent rounded-full"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/partners" element={<Layout><Partners /></Layout>} />
          <Route path="/problems" element={<Layout><Problems /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
