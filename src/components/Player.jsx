import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';

const Player = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentTrack?.src) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] text-white px-4 md:px-8 py-3 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between z-50">
      {/* Track Info */}
      <div className="flex items-center gap-4 w-full md:w-1/3 mb-2 md:mb-0">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-12 h-12 object-cover rounded shadow"
        />
        <div>
          <p className="text-sm font-semibold truncate w-40">{currentTrack.title}</p>
          <p className="text-xs text-gray-400 truncate w-40">{currentTrack.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 justify-center w-full md:w-1/3">
        <button className="hover:text-green-400 transition">
          <FaStepBackward size={20} />
        </button>
        <button
          onClick={togglePlay}
          className="hover:text-green-400 transition"
        >
          {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
        </button>
        <button className="hover:text-green-400 transition">
          <FaStepForward size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="hidden md:flex items-center gap-2 w-full md:w-1/3">
        <span className="text-xs text-gray-400">0:00</span>
        <div className="flex-1 bg-gray-600 h-1 rounded overflow-hidden">
          <div className="bg-green-500 h-1 rounded w-1/3"></div>
        </div>
        <span className="text-xs text-gray-400">2:30</span>
      </div>

      {/* Hidden Audio */}
      <audio ref={audioRef} />
    </div>
  );
};

export default Player;
