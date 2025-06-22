import React from 'react';

const Search = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search songs, artists, albums..."
        className="w-full p-3 rounded bg-[#181818] text-white placeholder-gray-400"
      />
      <p className="text-gray-400 mt-4">Search results will appear here...</p>
    </div>
  );
};

export default Search; 