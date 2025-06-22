import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 p-2 rounded-md transition-colors duration-200 ${
      location.pathname === path ? 'bg-green-500 text-black' : 'hover:bg-[#1db954] hover:text-black'
    }`;

  return (
    <aside className="w-60 h-full bg-[#121212] text-white p-6 hidden md:block border-r border-gray-800">
      <ul className="space-y-2 text-base">
        <li>
          <Link to="/" className={linkClass('/')}>🏠 Home</Link>
        </li>
        <li>
          <Link to="/search" className={linkClass('/search')}>🔍 Search</Link>
        </li>
        <li>
          <Link to="/library" className={linkClass('/library')}>📚 Your Library</Link>
        </li>
      </ul>
      <div className="mt-6 pt-4 border-t border-gray-700 space-y-2">
        <button className="w-full text-left flex items-center gap-3 px-2 py-1 hover:bg-[#1db954] hover:text-black rounded-md">🎶 Create Playlist</button>
        <button className="w-full text-left flex items-center gap-3 px-2 py-1 hover:bg-[#1db954] hover:text-black rounded-md">❤️ Liked Songs</button>
        <button className="w-full text-left flex items-center gap-3 px-2 py-1 hover:bg-[#1db954] hover:text-black rounded-md">📥 Downloads</button>
      </div>
    </aside>
  );
};

export default Sidebar;