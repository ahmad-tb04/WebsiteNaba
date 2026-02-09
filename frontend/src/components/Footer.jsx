import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Naba</span>
              <div className="ml-1 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-accent" />
                <div className="flex -mt-[1px]">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[5px] border-l-transparent border-r-transparent border-b-accent" />
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[5px] border-l-transparent border-r-transparent border-b-accent ml-[1px]" />
                </div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              AI-powered inventory intelligence for smarter, faster decisions. 
              Optimize stock, reduce losses, and forecast demand with high accuracy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/problems" className="text-gray-400 hover:text-accent transition-colors">Problems</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li><Link to="/partners" className="text-gray-400 hover:text-accent transition-colors">Partners</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Naba. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with ❤️ by HTU Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
