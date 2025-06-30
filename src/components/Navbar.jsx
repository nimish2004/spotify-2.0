import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Home } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="relative w-full bg-black text-white border-b border-gray-800 shadow-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Brand */}
      <div className="text-2xl font-bold text-green-500">Spotify</div>

      {/* Center: Search + Home (stacked on mobile) */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
        <Link to="/" className="hover:text-green-400">
          <Home size={22} />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-64 px-3 py-2 text-sm rounded-full bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Optional: Install App button */}
        <button className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-black text-sm font-semibold px-4 py-1 rounded-full">
          Install App
        </button>
      </div>

      {/* Right: Bell + Profile */}
      <div className="flex items-center gap-5 relative self-end sm:self-auto" ref={dropdownRef}>
        <Link to="/notifications" className="hover:text-green-400">
          <Bell size={22} />
        </Link>

        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hover:text-green-400 focus:outline-none"
        >
          <User size={22} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
            <Link to="/account" className="block px-4 py-2 hover:bg-gray-800 text-sm">Account</Link>
            <Link to="/premium" className="block px-4 py-2 hover:bg-gray-800 text-sm">Upgrade to Premium</Link>
            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-800 text-sm">Settings</Link>
            <button
              onClick={() => console.log('Logout clicked')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-800 text-sm text-red-400"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
