import React from 'react';
import { Star, Instagram, Award, Shield, Heart } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 5,
      text: "What A Trip organized the most incredible Bali retreat. Every detail was perfect, from the wellness sessions to the stunning accommodations. Life-changing experience!",
      trip: "Bali Wellness Retreat"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, USA",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 5,
      text: "The Iceland adventure exceeded all expectations. Seeing the Northern Lights and hiking glaciers was magical. The guides were knowledgeable and friendly throughout.",
      trip: "Iceland Adventure"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "London, UK",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 5,
      text: "Our family trip to Costa Rica was absolutely fantastic. The kids loved the wildlife tours and zip-lining. Perfect balance of adventure and relaxation.",
      trip: "Costa Rica Family Fun"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 2847
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 1923
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 3156
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 2641
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 1847
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      likes: 2234
    }
  ];

  const trustBadges = [
    { icon: Award, text: "ATTA Certified" },
    { icon: Shield, text: "Fully Insured" },
    { icon: Heart, text: "100% Satisfaction" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who've created unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
              <p className="text-sm text-teal-600 font-medium">{testimonial.trip}</p>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Follow Our Journey
          </h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <Instagram className="h-6 w-6" />
            <span className="text-lg">@whatatrip</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Heart className="h-6 w-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Travelers Worldwide</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2">
                <badge.icon className="h-8 w-8 text-teal-600" />
                <span className="text-lg font-medium text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;