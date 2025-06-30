import React, { useRef, useEffect, useState } from 'react';

const PlayerBar = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showFullPlayer, setShowFullPlayer] = useState(false);

  const duration = audioRef.current?.duration || 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, []);

  useEffect(() => {
    if (currentTrack) {
      setCurrentTime(0);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60) || 0;
    const seconds = Math.floor(sec % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!currentTrack) return null;

  return (
    <>
      {/* Desktop / Tablet View */}
      <div className="hidden sm:flex h-20 bg-[#181818] border-t border-gray-700 px-6 items-center justify-between text-white">
        {/* Left */}
        <div className="flex items-center gap-4 w-1/3">
          <img src={currentTrack.cover} alt="" className="w-12 h-12 rounded" />
          <div>
            <p className="text-sm font-semibold">{currentTrack.title}</p>
            <p className="text-xs text-gray-400">{currentTrack.artist}</p>
          </div>
        </div>
        {/* Center */}
        <div className="flex items-center gap-6 w-1/3 justify-center">
          <button>⏮️</button>
          <button onClick={togglePlay}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button>⏭️</button>
        </div>
        {/* Right */}
        <div className="w-1/3 text-right text-xs text-gray-400">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Mobile Collapsed Player */}
     <div
  className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#181818] text-white px-4 py-2 flex items-center justify-between z-20"
  onClick={() => {
    console.log("Opening full screen"); // debug
    setShowFullPlayer(true);
  }}
>
  <div className="flex items-center gap-3">
    <img src={currentTrack.cover} className="w-10 h-10 rounded" alt="" />
    <div className="text-sm">
      <p className="font-medium truncate">{currentTrack.title}</p>
      <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
    </div>
  </div>
  <button
    className="text-xl"
    onClick={(e) => {
      e.stopPropagation(); // ✅ So it doesn't open fullscreen
      togglePlay();
    }}
  >
    {isPlaying ? '⏸️' : '▶️'}
  </button>
</div>


      {/* Full-Screen Mobile Player */}
      {showFullPlayer && (
        <div className="fixed inset-0 bg-[#121212] text-white flex flex-col z-30">
          <div className="flex justify-between items-center p-4">
            <span></span>
            <button onClick={() => setShowFullPlayer(false)} className="text-2xl">⬇️</button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
            <img src={currentTrack.cover} className="w-64 h-64 rounded-lg" alt="" />
            <div className="text-center">
              <h1 className="text-xl font-bold">{currentTrack.title}</h1>
              <p className="text-sm text-gray-400">{currentTrack.artist}</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => {
                  const time = Number(e.target.value);
                  audioRef.current.currentTime = time;
                  setCurrentTime(time);
                }}
                className="w-full"
              />
              <div className="flex justify-between w-full text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            <div className="flex gap-10 text-3xl items-center justify-center">
              <button>⏮️</button>
              <button onClick={togglePlay}>
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              <button>⏭️</button>
            </div>
          </div>
          <audio ref={audioRef}>
            <source src={currentTrack.src} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
};

export default PlayerBar;
