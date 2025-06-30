import React from 'react';

const MainContent = () => {
  const madeForYou = [
    {
      title: 'Discover Weekly',
      description: 'Your weekly mix of new music',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    },
    {
      title: 'Daily Mix 1',
      description: 'Bollywood & Indie',
      image: 'https://images.unsplash.com/photo-1592339420310-e20dfbad29ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Focus Flow',
      description: 'Beats to keep you in the zone',
      image: 'https://plus.unsplash.com/premium_photo-1682308399287-71dc6f8eb5da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Hot Hits Hindi',
      description: 'The hottest tracks of the week',
      image: 'https://images.unsplash.com/photo-1565437919229-e1e149b1e188?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const throwbacks = [
    {
      title: 'Retro Rewind',
      description: 'Old is gold',
      image: 'https://plus.unsplash.com/premium_photo-1682125472704-ae4c0109747a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: '90s Bollywood',
      description: 'All-time favorites',
      image: 'https://plus.unsplash.com/premium_photo-1682125519317-43a8d20dde37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Coldplay Classics',
      description: 'Best of Coldplay',
      image: 'https://images.unsplash.com/file-1705123271268-c3eaf6a79b21image?w=416&dpr=2&auto=format&fit=crop&q=60',
    },
    {
      title: 'Throwback Pop',
      description: 'Nostalgic vibes',
      image: 'https://images.unsplash.com/photo-1615564381225-ac8b07e52bd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const renderCards = (items) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded mb-3"
          />
          <h3 className="text-base font-semibold truncate">{item.title}</h3>
          <p className="text-sm text-gray-400 truncate">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-[#121212] to-black">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {['All', 'Music', 'Podcasts'].map((label) => (
          <button
            key={label}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Made for You */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Made for You</h2>
        {renderCards(madeForYou)}
      </section>

      {/* Throwback */}
      <section>
        <h2 className="text-xl font-bold mb-4">Throwback</h2>
        {renderCards(throwbacks)}
      </section>
    </div>
  );
};

export default MainContent;
