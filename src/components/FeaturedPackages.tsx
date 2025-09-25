import React from 'react';
import { MapPin, Calendar, Users, Star, Clock } from 'lucide-react';

const FeaturedPackages: React.FC = () => {
  const packages = [
    {
      id: 1,
      title: "Bali Wellness Retreat",
      location: "Ubud, Bali",
      duration: "7 Days",
      price: "$2,499",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Daily yoga sessions", "Spa treatments", "Healthy cuisine", "Temple visits"],
      category: "Wellness"
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
      category: "Adventure"
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
      category: "Cultural"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences designed to create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">{pkg.price}</span>
                    <span className="text-gray-600 text-sm ml-1">per person</span>
                  </div>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200 font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;