import React from 'react';
import { Quote, Heart, Users, Star } from 'lucide-react';

const AuthenticStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      experience: "Cooking with Devi ji in Rajasthan",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "In Devi ji's kitchen, I didn't just learn recipes—I learned the language of love. Every spice told a story, every meal was a prayer. I left with more than cooking skills; I left with a piece of her family's soul.",
      transformation: "Discovered the sacred in everyday moments",
      connectionMade: "Became an honorary granddaughter",
      monthsAgo: 3
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "Chicago, IL",
      experience: "Weaving with Maria in Peru",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Maria's hands moved like poetry, and somehow she taught my clumsy fingers to speak the same language. Each thread became a conversation between our cultures, each pattern a bridge across worlds.",
      transformation: "Learned patience and mindful creation",
      connectionMade: "Ongoing friendship and textile collaboration",
      monthsAgo: 6
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      experience: "Sailing with Hassan in Morocco",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "At 5 AM, watching Hassan mend nets in the dawn light, I understood that some wisdom can only be learned through salt spray and patient hands. The ocean teaches what no classroom can.",
      transformation: "Found peace in daily rhythms",
      connectionMade: "Invited to family celebrations",
      monthsAgo: 4
    }
  ];

  const impactStats = [
    { number: "127", label: "Families Supported", icon: Heart },
    { number: "23", label: "Communities Connected", icon: Users },
    { number: "89%", label: "Life-Changing Experiences", icon: Star }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Stories of Transformation
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Real connections, authentic experiences, lasting friendships
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-12 mb-20">
          {stories.map((story, index) => (
            <div key={story.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="bg-stone-50 rounded-3xl p-8">
                  <Quote className="h-12 w-12 text-amber-600 mb-4" />
                  <blockquote className="text-lg text-stone-700 leading-relaxed mb-6 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-stone-900">{story.name}</h4>
                      <p className="text-sm text-stone-600">{story.location}</p>
                      <p className="text-sm text-amber-600">{story.monthsAgo} months ago</p>
                    </div>
                  </div>
                  <div className="border-t border-stone-200 pt-4">
                    <p className="text-sm text-stone-600 mb-2">
                      <span className="font-semibold">Experience:</span> {story.experience}
                    </p>
                    <p className="text-sm text-stone-600 mb-2">
                      <span className="font-semibold">Transformation:</span> {story.transformation}
                    </p>
                    <p className="text-sm text-stone-600">
                      <span className="font-semibold">Connection Made:</span> {story.connectionMade}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={`https://images.pexels.com/photos/${index % 2 === 0 ? '1143754' : '6966501'}/pexels-photo-${index % 2 === 0 ? '1143754' : '6966501'}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={`${story.experience} cultural experience`}
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-amber-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-stone-900 text-center mb-8">
            Creating Meaningful Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-teal-700" />
                </div>
                <div className="text-3xl font-bold text-stone-900 mb-2">{stat.number}</div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-600 mt-8 max-w-2xl mx-auto">
            Every journey creates ripples of positive change—for travelers, communities, and the preservation of cultural heritage worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthenticStories;