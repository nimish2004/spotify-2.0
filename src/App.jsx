import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';

function App() {
  const [search, setSearch] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="flex flex-col h-full w-full bg-black text-white overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home search={search} setCurrentTrack={setCurrentTrack} />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
      <Player currentTrack={currentTrack} />
    </div>
  );
}

export default App;
