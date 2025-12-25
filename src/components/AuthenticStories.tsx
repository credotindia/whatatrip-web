import React from 'react';
import { Quote, Heart, Users, Star } from 'lucide-react';

const AuthenticStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: "Navaf Sharafudheen",
      location: "Ernakulam, Kerala",
      experience: "Cooking with Devi ji in Rajasthan",
      image: "/src/assets/person.png",
      quote: "I was lucky enough to travel to Kashmir twice, once in the autumn of 2022 and then again in the summer of 2023. Both trips are still some of the most unforgettable Umerriences of my life. Kashmir truly feels like heaven on earth, not just because of its breathtaking mountains and valleys, but also because of the warmth and kindness of its people. Even though I was thousands of kilometers away from my own home, it felt like I belonged there. A huge thanks to What a Trip and to my brothers Umer Mukhtar and Akram for showing me the real Kashmir—the beauty, the culture, and the love that stays with you long after you leave.",
      transformation: "Discovered the sacred in everyday moments",
      connectionMade: "Became an honorary granddaughter",
      monthsAgo: 3
    },
    {
      id: 2,
      name: "Nabeel Shan",
      location: "Calicut, Kerala",
      experience: "Weaving with Maria in Peru",
      image: "/src/assets/person.png",
      quote: "I’ve traveled with What A Trip multiple times – twice to Kashmir (once in summer and once in winter), and also on an unforgettable Srinagar–Ladakh bike trip. Every experience with them was truly amazing. Since they are based in Kashmir, they know the region inside out and take care of every detail with great warmth. The level of care and local expertise they provide is something no other company can match.",
      transformation: "Learned patience and mindful creation",
      connectionMade: "Ongoing friendship and textile collaboration",
      monthsAgo: 6
    },
    {
      id: 3,
      name: "Mirsab & Nidha",
      location: "Trissur, Kerala",
      experience: "Sailing with Hassan in Morocco",
      image: "/src/assets/person.png",
      quote: "We’ve traveled with 'What A Trip' twice now, and both journeys were truly unforgettable! Our first autumn trip was seamless, stress-free, and perfectly organized. On our second trip just last week, we even attended a Kashmiri wedding and were touched by the incredible warmth and hospitality of the local people. With 'What A Trip', you don’t just travel — you experience Kashmir like family.",
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
                  {/*<div className="border-t border-stone-200 pt-4">
                    <p className="text-sm text-stone-600 mb-2">
                      <span className="font-semibold">Experience:</span> {story.experience}
                    </p>
                    <p className="text-sm text-stone-600 mb-2">
                      <span className="font-semibold">Transformation:</span> {story.transformation}
                    </p>
                    <p className="text-sm text-stone-600">
                      <span className="font-semibold">Connection Made:</span> {story.connectionMade}
                    </p>
                  </div>*/}
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={`/src/assets/featured-experiences-04.jpg`}
                  alt={`${story.experience} cultural experience`}
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-amber-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-stone-100 text-center mb-8">
            Creating Meaningful Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-stone-100" />
                </div>
                <div className="text-3xl font-bold text-stone-100 mb-2">{stat.number}</div>
                <div className="text-stone-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-100 mt-8 max-w-2xl mx-auto">
            Every journey creates ripples of positive change—for travelers, communities, and the preservation of cultural heritage worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthenticStories;