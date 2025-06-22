import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-800 w-full shadow-lg">
      <h1 className="text-2xl font-bold text-green-500">Spotify</h1>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-green-400 text-lg">Home</Link>
        <Link to="/search" className="hover:text-green-400 text-lg">Search</Link>
        <Link to="/library" className="hover:text-green-400 text-lg">Library</Link>
      </div>
    </nav>
  );
};

export default Navbar;