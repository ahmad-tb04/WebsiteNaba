import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const linkClass = (to) => {
    const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to);
    return `${isActive ? 'text-accent' : 'text-gray-400'} hover:text-accent transition-colors duration-200`;
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" onClick={handleLinkClick}>
              <motion.img
                src="/NabaWhite.png"
                alt="Naba"
                className="h-12 w-auto mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              AI-powered inventory intelligence for smarter, faster decisions.
              Optimize stock, reduce losses, and forecast demand with high accuracy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={linkClass('/')} onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkClass('/about')} onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/problems" className={linkClass('/problems')} onClick={handleLinkClick}>
                  Problems
                </Link>
              </li>
              <li>
                <Link to="/faq" className={linkClass('/faq')} onClick={handleLinkClick}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white font-semibold mb-6">More</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/partners" className={linkClass('/partners')} onClick={handleLinkClick}>
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className={linkClass('/testimonials')} onClick={handleLinkClick}>
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Naba. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built by HTU Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
