import React, { useState } from 'react';
import { Home, Search, Library, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const playlists = [
    '❤️ Liked Songs',
    'My Top Tracks',
    'Lo-Fi Chill',
    'Bollywood Mix',
    'Gym Motivation',
    'Old Hindi Gold',
    'Kesariya - Brahmastra',
    'Arijit Singh Essentials',
    'Indie Vibes',
    'Chillout Beats',
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-black p-2 rounded-md text-white"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed sm:static top-0 left-0 h-screen w-64 bg-black text-white border-r border-gray-800 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 sm:translate-x-0`}
      >
        {/* Close button (mobile only) */}
        <div className="flex items-center justify-between sm:hidden px-4 py-3 border-b border-gray-700">
          <h1 className="text-lg font-bold text-green-500">Spotify</h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Logo & Nav */}
        <div className="p-4 space-y-6">

          {/* Navigation */}
          <nav className="space-y-4">
            <Link to="/" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white">
              <Home size={18} /> Home
            </Link>
            <Link to="/search" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white">
              <Search size={18} /> Search
            </Link>
            <Link to="/library" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white">
              <Library size={18} /> Your Library
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-2 mx-4" />

        {/* Playlists */}
        <div className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="space-y-2 text-sm">
            {playlists.map((playlist, idx) => (
              <p
                key={idx}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors truncate"
              >
                {playlist}
              </p>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
