import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, Clock, Filter } from 'lucide-react';

const TripsAndRetreats: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['all', 'adventure', 'wellness', 'cultural', 'luxury', 'family'];

  const trips = [
    {
      id: 1,
      title: "Bali Wellness Retreat",
      location: "Ubud, Bali",
      duration: "7 Days",
      price: "$2,499",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Daily yoga sessions", "Spa treatments", "Healthy cuisine", "Temple visits"],
      category: "wellness",
      dates: "Mar 15 - Apr 30",
      availability: "Available"
    },
    {
      id: 2,
      title: "Iceland Adventure",
      location: "Reykjavik, Iceland",
      duration: "10 Days",
      price: "$3,899",
      rating: 4.8,
      image: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Northern Lights", "Glacier hiking", "Hot springs", "Waterfall tours"],
      category: "adventure",
      dates: "Oct 1 - Nov 15",
      availability: "Limited"
    },
    {
      id: 3,
      title: "Japan Cultural Journey",
      location: "Tokyo & Kyoto",
      duration: "12 Days",
      price: "$4,299",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Temple stays", "Tea ceremonies", "Sushi masterclass", "Cherry blossoms"],
      category: "cultural",
      dates: "Apr 1 - May 31",
      availability: "Available"
    },
    {
      id: 4,
      title: "Swiss Alps Luxury",
      location: "Zermatt, Switzerland",
      duration: "8 Days",
      price: "$5,999",
      rating: 4.9,
      image: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["5-star hotels", "Helicopter tours", "Fine dining", "Skiing"],
      category: "luxury",
      dates: "Dec 1 - Mar 31",
      availability: "Available"
    },
    {
      id: 5,
      title: "Morocco Desert Safari",
      location: "Marrakech, Morocco",
      duration: "9 Days",
      price: "$2,899",
      rating: 4.7,
      image: "https://images.pexels.com/photos/2169191/pexels-photo-2169191.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Camel trekking", "Desert camping", "Berber culture", "Souks exploration"],
      category: "adventure",
      dates: "Oct 15 - Apr 30",
      availability: "Available"
    },
    {
      id: 6,
      title: "Costa Rica Family Fun",
      location: "San José, Costa Rica",
      duration: "10 Days",
      price: "$3,299",
      rating: 4.8,
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Wildlife tours", "Zip-lining", "Beach time", "Volcano visits"],
      category: "family",
      dates: "Year-round",
      availability: "Available"
    }
  ];

  const filteredTrips = trips.filter(trip => 
    selectedCategory === 'all' || trip.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trips & Retreats
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover carefully curated experiences that will transform your perspective
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
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
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trip.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{trip.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trip.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {trip.availability}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{trip.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{trip.dates}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {trip.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">{trip.price}</span>
                    <span className="text-gray-600 text-sm ml-1">per person</span>
                  </div>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200 font-medium">
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripsAndRetreats;