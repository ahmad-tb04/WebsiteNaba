import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import FAQ from './pages/FAQ.jsx';
import About from './pages/About.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Partners from './pages/Partners.jsx';
import Problems from './pages/Problems.jsx';
import AdminLogin from './pages/admin/Login.jsx';
import AdminDashboard from './pages/admin/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes without main layout */}
        <Route path="/admin/login" element={
          <div className="min-h-screen bg-navy-900">
            <AdminLogin />
          </div>
        } />
        <Route path="/admin/dashboard" element={
          <div className="min-h-screen bg-navy-900">
            <AdminDashboard />
          </div>
        } />
        
        {/* Public routes with main layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
        <Route path="/partners" element={<Layout><Partners /></Layout>} />
        <Route path="/problems" element={<Layout><Problems /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
