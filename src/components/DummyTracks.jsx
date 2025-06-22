import React from 'react';
import AudioPlayer from './AudioPlayer';

const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", src: "/songs/blinding-lights.mp3" },
  { title: "Dance Monkey", artist: "Tones and I", src: "/songs/dance-monkey.mp3" },
  { title: "Levitating", artist: "Dua Lipa", src: "/songs/levitating.mp3" }
];

const DummyTracks = () => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Trending Tracks</h3>
      <ul className="space-y-4">
        {tracks.map((track, index) => (
          <li key={index}>
            <AudioPlayer track={track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyTracks;
