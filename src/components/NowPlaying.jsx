import React, { useEffect, useRef, useState } from 'react';

const NowPlaying = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    const updateProgress = () => {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
    };
  }, [currentTrack]);

  if (!currentTrack) {
    return (
      <div className="w-72 bg-[#1c1c1c] p-4 hidden lg:block">
        <h3 className="text-lg font-semibold mb-2">Now Playing</h3>
        <div className="bg-gray-800 rounded-lg p-4 text-gray-400 text-center">
          Nothing is playing right now.
        </div>
      </div>
    );
  }

  return (
    <div className="w-72 bg-[#1c1c1c] p-4 hidden lg:block">
      <h3 className="text-lg font-semibold mb-2">Now Playing</h3>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={currentTrack.cover || 'https://via.placeholder.com/300'}
          alt="Album Art"
          className="w-full h-60 object-cover"
        />
        <div className="p-3 space-y-1">
          <h4 className="font-bold text-sm truncate">{currentTrack.title}</h4>
          <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>

          {/* Like Button */}
          <button className="mt-2 text-green-500 hover:text-green-400 text-sm">💚 Liked</button>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-600 mt-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Hidden audio for syncing (can be removed if audio is handled globally) */}
      <audio ref={audioRef}>
        <source src={currentTrack.src} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default NowPlaying;
