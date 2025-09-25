import React, { useState } from 'react';
import { Play, Image, MapPin, Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'destinations', 'experiences', 'culture', 'nature'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Santorini Sunset',
      location: 'Santorini, Greece',
      category: 'destinations',
      size: 'large'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bali Rice Terraces',
      location: 'Ubud, Bali',
      category: 'nature',
      size: 'medium'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Japanese Tea Ceremony',
      location: 'Kyoto, Japan',
      category: 'culture',
      size: 'medium'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Northern Lights',
      location: 'Iceland',
      category: 'destinations',
      size: 'large'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Swiss Alps',
      location: 'Zermatt, Switzerland',
      category: 'nature',
      size: 'medium'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Zip-lining Adventure',
      location: 'Costa Rica',
      category: 'experiences',
      size: 'medium'
    },
    {
      id: 7,
      type: 'video',
      src: 'https://images.pexels.com/photos/2169191/pexels-photo-2169191.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Desert Safari',
      location: 'Morocco',
      category: 'experiences',
      size: 'large'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Machu Picchu',
      location: 'Peru',
      category: 'destinations',
      size: 'medium'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/2166650/pexels-photo-2166650.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Safari Wildlife',
      location: 'Kenya',
      category: 'nature',
      size: 'medium'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const getGridClass = (size: string, index: number) => {
    if (size === 'large') {
      return 'md:col-span-2 md:row-span-2';
    }
    return 'col-span-1 row-span-1';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visual Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in breathtaking destinations through our curated collection
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${getGridClass(item.size, index)}`}
            >
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center space-x-1 text-white/90">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>
                
                {/* Media Type Icon */}
                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Play className="h-5 w-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Image className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors duration-200 font-medium">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;