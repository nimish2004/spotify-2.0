import React from 'react';
import MainContent from '../components/MainContent';
import NowPlaying from '../components/NowPlaying';
import PlayerBar from '../components/PlayerBar';

const HomePage = ({ search, setCurrentTrack, currentTrack }) => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <MainContent search={search} setCurrentTrack={setCurrentTrack} />
        <NowPlaying currentTrack={currentTrack} />
      </div>
      <PlayerBar currentTrack={currentTrack} />
    </div>
  );
};

export default HomePage;
