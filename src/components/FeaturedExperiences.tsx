import React from "react";
import { MessageSquare, Users, Heart, MapPin } from "lucide-react";
import image1 from "../assets/featured-experiences-01.jpg";
import image2 from "../assets/featured-experiences-02.jpg";
import image3 from "../assets/featured-experiences-03.jpg";
import image4 from "../assets/featured-experiences-04.jpg";
import image5 from "../assets/1.jpg";
import image6 from "../assets/2.jpg";
import image7 from "../assets/3.jpg";

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      location: "Aru Valley, Kashmir",
      title: "Into the Wild: Aru Valley Stay",
      highlights: [
        "Offbeat Trekking",
        "Riverside Camping",
        "Fishing",
        "Stargazing",
      ],
      description:
        "Leave behind the crowd and escape to Aru — Kashmir’s hidden alpine pocket. Trek through wildflower trails, fish in glacial rivers, and sleep under a sky you won’t believe is real. Wake up to pine-scented air and stories by the fire.",
      image: image7,
      communityImpact:
        "Supports local trekking communities & promotes sustainable tourism",
      phoneNumber: "+1234567890",
      location_region: "Kashmir",
    },
    {
      id: 2,
      location: "Kupwara, North Kashmir",
      title: "The Quiet Life: Workation in Kupwara Village",
      highlights: [
        "Remote Work",
        "Homely Food",
        "Cultural Immersion",
        "Slow Travel",
      ],
      description:
        "Base yourself in a serene mountain village where the WiFi works and the pace slows down. Join in the rhythms of local life — from morning chai with farmers to quiet hikes and homemade Kashmiri meals. It’s not a stay; it’s a new way of living.",
      image: image6,
      communityImpact:
        "Preserves rural traditions while enabling responsible digital nomadism",
      phoneNumber: "+1234567890",
      location_region: "Kashmir",
    },
    {
      id: 3,
      location: "Ladakh Region",
      title: "Ladakh Like Never Before: Hidden Route Bike Expedition",
      highlights: [
        "Bikepacking",
        "Offbeat Trails",
        "Local Encounters",
        "High-Altitude Adventure",
      ],
      description:
        "Saddle up for an expedition that skips the usual Manali-Leh route and dives deep into Ladakh’s undiscovered sides. Ride through valleys no one’s posted on Instagram yet. Camp in secret spots, share tea with monks, and touch the soul of the mountains.",
      image: image5,
      communityImpact:
        "Empowers local guides and opens access to lesser-known villages",
      phoneNumber: "+1234567890",
      location_region: "Kashmir",
    },
    {
      id: 4,
      location: "Srinagar, Kashmir",
      title: "Timeless Waters: Dal Lake Houseboat Life",
      highlights: [
        "Luxury Houseboats",
        "Sunset Shikara Rides",
        "Floating Market",
        "Heritage Living",
      ],
      description:
        "Stay in a handcrafted wooden houseboat and watch the city flow by in golden silence. From sunset rides on mirror-like waters to dawn trips through the floating vegetable market — this is the Kashmiri way of life, lived luxuriously.",
      image: image4,
      communityImpact:
        "Sustains traditional craftsmanship and the lake’s historic houseboat legacy",
      phoneNumber: "+1234567890",
      location_region: "Kashmir",
    },
  ];

  const handleWhatsAppClick = (experience: (typeof experiences)[0]) => {
    const message = encodeURIComponent(
      `Hi! I'm deeply moved by the "${experience.title}" experience in ${experience.location}. I'd love to learn more about this transformative journey and how I can connect with this community.`
    );
    const whatsappUrl = `https://wa.me/${experience.phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Immerse yourself in journeys that go beyond the itinerary — curated
            by locals, crafted for memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-stone-800">
                      {experience.location_region}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-teal-700/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      Community Impact
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">
                  {experience.title}
                </h3>
                <p className="text-amber-600 font-medium mb-4">
                  {experience.location}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <p className="text-stone-700 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div className="flex items-center space-x-2 text-teal-700">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {experience.communityImpact}
                    </span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(experience)}
                    className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium flex items-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Connect Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
