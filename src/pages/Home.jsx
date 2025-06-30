import React, { useState, useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';

const token = 'BQDy1iGpzrOA0VuhPv-pSFQD89JlBrVqhlRkJfSPf-WeaSQdaJcET0LKoeb7n9s7z6d6xnhaZPfI08OSSUlblmD86y_hLa1jS7Idjf4lxDniUTSEZVshvTnjJm8BoV6cQK4XMZ6etmo4QKRRLNL1Cmr6anMXR8z2jWPf9n6FBZAYcUtyl3Ncs-8FWtFHHjvatghCOpJ-uydh74xaith_456mKGZSbDnhqIXhgokKvyni8SeLhjBujVgQV_aRVSyaDLPArMpG9xUapq1wbepsnjQ789CjmPyOlxDmKn_mx_6H_-9paLvHIUuim_ss-g3I';

const Home = ({ search, setCurrentTrack }) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const res = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=12', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

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
    <div className="mt-4 mb-20">
      <h1 className="text-3xl font-bold mb-6">Good Evening</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading top tracks...</p>
      ) : filteredTracks.length === 0 ? (
        <p className="text-center text-gray-400">No matching songs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracks.map((track, index) => (
            <div
              key={index}
              className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition duration-300"
              onClick={() => setCurrentTrack(track)}
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-3 text-lg font-semibold">{track.title}</h2>
              <p className="text-gray-400 text-sm">{track.artist}</p>

              {track.src && (
                <div className="mt-2">
                  <AudioPlayer track={track} setCurrentTrack={setCurrentTrack} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
