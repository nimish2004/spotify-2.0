import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Home } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-800 w-full shadow-lg">
      {/* Left: Brand */}
      <div className="text-2xl font-bold text-green-500">Spotify</div>

      {/* Center: Home + Search */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Link to="/" className="hover:text-green-400">
          <Home size={22} />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="w-64 px-4 py-2 rounded-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-6 relative" ref={dropdownRef}>
        <Link to="/notifications" className="hover:text-green-400">
          <Bell size={22} />
        </Link>

        {/* Profile Dropdown */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hover:text-green-400 focus:outline-none"
        >
          <User size={22} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
            <Link
              to="/account"
              className="block px-4 py-2 hover:bg-gray-800 text-sm"
            >
              Account
            </Link>
            <Link
              to="/premium"
              className="block px-4 py-2 hover:bg-gray-800 text-sm"
            >
              Upgrade to Premium
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-gray-800 text-sm"
            >
              Settings
            </Link>
            <button
              onClick={() => {
                // handle logout logic
                console.log('Logout clicked');
              }}
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
