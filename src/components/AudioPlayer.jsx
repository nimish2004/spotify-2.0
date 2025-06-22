import React from 'react';

const AudioPlayer = ({ track, setCurrentTrack }) => {
  const handlePlay = () => {
    setCurrentTrack(track);
  };

  return (
    <div className="w-full flex items-center justify-between bg-[#282828] p-4 rounded-lg">
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
      <div className="space-x-4">
        <button onClick={handlePlay} className="bg-green-500 px-4 py-1 rounded">
          Play
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
