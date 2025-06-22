import React, { useState, useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';

const token = 'BQAl8dcGmGiyc6D-V3jEGQsu0fzXyw1zdHzqsabJ9RvSy39pyhh_jAR_23HtZF_0gOVbYR8cHcKJTXsbGC57cqvqFsBjwPslYYhKtYR8lPnr-EV0M6vfRGuxva5HOEF-WGFHQj5rokTKQS3dkM9U_w5GRRe_TVQaMzLWk5mD7pJOraoZrBkRirLWo7SH2QGkDdIRt2Dxa8NPa_WLQe_JYJuxWoaTEojvu_jnn4MehDdOm6NY9DfrpEKwtgG_wtwr7Kqrzc7uSpG4PG2j8wbYlYlXh5e5QdLBSUe8lDY5SSRUN_9l9TlDs0uKwbs1Dgqa'; // Replace with a fresh token

const Home = ({ search, setCurrentTrack }) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchTopTracks = async () => {
    try {
      const res = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=12', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await res.json();

      console.log('Raw Spotify response:', data); // ✅ Correct place to log

      const parsed = data.items?.map(track => ({
        title: track.name,
        artist: track.artists.map(a => a.name).join(', '),
        cover: track.album.images[0]?.url,
        src: track.preview_url
      })) || [];

      setTracks(parsed);
    } catch (err) {
      console.error('Failed to fetch tracks:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchTopTracks();
}, []);


  const filteredTracks = !search.trim()
    ? tracks
    : tracks.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.artist.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="mt-6 space-y-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Good Evening</h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading top tracks...</p>
      ) : filteredTracks.length === 0 ? (
        <p className="text-center text-gray-400">No matching songs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track, index) => (
            <div
              key={index}
              className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition duration-300"
              onClick={() => setCurrentTrack(track)}
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-4 text-lg font-semibold">{track.title}</h2>
              <p className="text-gray-400 text-sm">{track.artist}</p>
              <div className="mt-2">
                <AudioPlayer track={track} setCurrentTrack={setCurrentTrack} />

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
