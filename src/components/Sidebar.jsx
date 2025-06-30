import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md transition duration-200 ${
      location.pathname === path
        ? 'bg-green-500 text-black'
        : 'hover:bg-[#1db954] hover:text-black'
    }`;

  return (
    <aside className="w-60 h-full bg-[#121212] text-white p-6 hidden md:block border-r border-gray-800">
      {/* Top Heading */}
      <h2 className="text-lg font-semibold text-white mb-4">Your Library</h2>

      {/* Library Items */}
      <ul className="space-y-2 text-base">
        <li>
          <Link to="/library/liked" className={linkClass('/library/liked')}>
            ❤️ Liked Songs
          </Link>
        </li>
        <li>
          <Link to="/library/artists" className={linkClass('/library/artists')}>
            🌟 Favorite Artists
          </Link>
        </li>
        <li>
          <Link to="/library/downloads" className={linkClass('/library/downloads')}>
            📥 Downloads
          </Link>
        </li>
        {/* Add more like playlists, albums etc. */}
      </ul>
    </aside>
  );
};

export default Sidebar;
