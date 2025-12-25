import React, { useState } from 'react';
import { MessageSquare, Users, Heart, MapPin, Play, Camera } from 'lucide-react';

const ExperienceShowcase: React.FC = () => {
  const experiences = [
    {
      id: 1,
      location: "Grandmother's Kitchen, Rajasthan",
      title: "Cooking Ancient Recipes",
      type: "culinary",
      region: "Asia",
      highlights: ["Traditional spice blending", "Family storytelling", "Generational wisdom"],
      description: "Join Devi ji in her ancestral kitchen where recipes haven't changed in 300 years. Learn to grind spices by hand while she shares stories of her grandmother's wedding feast. Every dish carries the weight of history, every meal becomes a celebration of resilience.",
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Preserves traditional cooking techniques",
      behindScenes: "Devi ji's kitchen has been in her family for 300 years. The clay stove was built by her great-grandmother, and the recipes are passed down through songs and stories.",
      mediaType: "photo",
      phoneNumber: "+1234567890"
    },
    {
      id: 2,
      location: "Artisan Village, Peru",
      title: "Weaving Stories into Textiles",
      type: "artisan",
      region: "South America",
      highlights: ["Ancient weaving techniques", "Natural dye creation", "Cultural symbolism"],
      description: "Maria's hands move like poetry across the loom, each thread carrying the story of her Andean ancestors. Learn to read the language of patterns that speak of mountains, rivers, and dreams. Your creation becomes a bridge between two worlds.",
      image: "https://images.pexels.com/photos/6966501/pexels-photo-6966501.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Supports indigenous textile preservation",
      behindScenes: "Each pattern tells a story - the zigzag represents mountains, the diamond shape symbolizes the eye of the llama, protector of the flock.",
      mediaType: "video",
      phoneNumber: "+1234567890"
    },
    {
      id: 3,
      location: "Fisherman's Dawn, Morocco",
      title: "Sailing with the Tides",
      type: "maritime",
      region: "Africa",
      highlights: ["Traditional fishing methods", "Ocean conservation", "Maritime heritage"],
      description: "Before sunrise, join Hassan and his crew as they prepare nets their fathers made. Feel the rhythm of waves that have carried generations of fishermen. In the gentle rocking of the boat, discover how the sea connects all souls who dare to trust its depths.",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Promotes sustainable fishing practices",
      behindScenes: "Hassan's boat was built by his grandfather using traditional techniques. The nets are mended by hand each evening, a meditative practice passed down through generations.",
      mediaType: "photo",
      phoneNumber: "+1234567890"
    },
    {
      id: 4,
      location: "Sacred Grove, Indonesia",
      title: "Healing with Forest Wisdom",
      type: "healing",
      region: "Asia",
      highlights: ["Traditional medicine", "Spiritual practices", "Ecosystem harmony"],
      description: "Walk barefoot with Pak Wayan through the sacred forest where every plant holds healing power. Learn to listen to the whispers of leaves and understand how indigenous communities have lived in harmony with nature for centuries. Your journey becomes a medicine for the soul.",
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Supports forest conservation efforts",
      behindScenes: "Pak Wayan learned from his grandmother, who could identify over 200 medicinal plants. The forest is considered sacred, and visitors must ask permission before entering.",
      mediaType: "video",
      phoneNumber: "+1234567890"
    },
    {
      id: 5,
      location: "Mountain Monastery, Tibet",
      title: "Meditation in the Clouds",
      type: "spiritual",
      region: "Asia",
      highlights: ["Ancient meditation practices", "Philosophical discussions", "Inner transformation"],
      description: "At 4,000 meters above sea level, join the monks in their daily practice of finding stillness within movement. Learn breathing techniques that have been refined over centuries, and discover how silence becomes the most profound conversation you'll ever have.",
      image: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Preserves Tibetan Buddhist practices",
      behindScenes: "The monastery has been home to monks for over 1,000 years. The meditation hall faces east to greet the sun, and the chanting begins at 4 AM every morning.",
      mediaType: "photo",
      phoneNumber: "+1234567890"
    },
    {
      id: 6,
      location: "Vineyard Harvest, Italy",
      title: "Seasons of the Vine",
      type: "agricultural",
      region: "Europe",
      highlights: ["Organic farming", "Wine tradition", "Seasonal rhythms"],
      description: "Giuseppe's family has tended these vines for five generations, reading the weather in the curl of leaves and timing harvest by the moon. Join in the ancient dance of grape picking, where every basket tells the story of earth, sun, and human devotion.",
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Supports sustainable agriculture",
      behindScenes: "The vineyard follows biodynamic principles, with harvest timing based on lunar cycles. Giuseppe's grandfather's hand-written notes guide every decision.",
      mediaType: "video",
      phoneNumber: "+1234567890"
    },
    {
      id: 7,
      location: "Pottery Studio, Japan",
      title: "Shaping Clay, Shaping Soul",
      type: "artisan",
      region: "Asia",
      highlights: ["Traditional pottery", "Zen philosophy", "Mindful creation"],
      description: "In Takeshi's quiet studio, the wheel turns and time seems to slow. Learn the ancient art of raku pottery, where imperfection becomes beauty and every crack tells a story. The clay teaches patience, the fire teaches surrender, and the final piece teaches acceptance.",
      image: "https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Preserves traditional Japanese crafts",
      behindScenes: "Takeshi's studio has been in his family for 300 years. The clay comes from a special riverbed, and the kiln is fired with wood from the surrounding forest.",
      mediaType: "photo",
      phoneNumber: "+1234567890"
    },
    {
      id: 8,
      location: "Dreamtime Stories, Australia",
      title: "Walking the Songlines",
      type: "spiritual",
      region: "Oceania",
      highlights: ["Aboriginal wisdom", "Land connection", "Ancestral stories"],
      description: "Elder Mary shares the stories that map the land, where every rock, tree, and waterhole holds meaning passed down for 65,000 years. Learn to read the landscape as a living library, where the earth itself becomes your guide to understanding connection.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      communityImpact: "Preserves Aboriginal culture",
      behindScenes: "Mary's stories have been passed down through 65,000 years of oral tradition. Each rock formation has a story, and every waterhole holds ancestral memory.",
      mediaType: "video",
      phoneNumber: "+1234567890"
    }
  ];

  const handleWhatsAppClick = (experience: typeof experiences[0]) => {
    const message = encodeURIComponent(`Hi! I'm deeply moved by the "${experience.title}" experience in ${experience.location}. I'd love to learn more about this transformative journey and how I can connect with this community.`);
    const whatsappUrl = `https://wa.me/${experience.phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            Authentic Cultural Experiences in Kashmir
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Discover transformative connections with local communities around the world
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-stone-800">{experience.region}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {experience.mediaType === 'video' ? (
                      <Play className="h-5 w-5 text-teal-700" />
                    ) : (
                      <Camera className="h-5 w-5 text-teal-700" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-teal-700/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">{experience.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{experience.title}</h3>
                <p className="text-amber-600 font-medium mb-4">{experience.location}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.highlights.map((highlight, index) => (
                    <span key={index} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>

                <p className="text-stone-700 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-semibold text-stone-900 mb-2">Behind the Scenes</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {experience.behindScenes}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div className="flex items-center space-x-2 text-teal-700">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">{experience.communityImpact}</span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(experience)}
                    className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium flex items-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Connect</span>
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

export default ExperienceShowcase;