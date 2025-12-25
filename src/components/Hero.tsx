import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import bgVideo from "../assets/hero-banner.mp4";

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890";
    const message = encodeURIComponent(
      "Hi! I'm interested in Authentic Cultural Experiences in Kashmir in Kashmir. Can you help me discover something truly transformative?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video for desktop and tablet */}
        <video
          className="block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          // poster="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source src={bgVideo} type="video/mp4" />

          {/* Fallback image if video fails to load */}
          {/* <img
            src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Authentic cultural interaction between travelers and local community"
            className="w-full h-full object-cover"
          /> */}
        </video>

        {/* Fallback image for mobile devices */}
        {/* <div className="md:hidden w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
          <img
            src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Authentic cultural interaction between travelers and local community"
            className="w-full h-full object-cover opacity-70"
          />
        </div> */}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Kashmir & Ladakh
          <span className="text-amber-400 block">
            Crafted For You, By Locals
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Experience the Himalayas beyond sightseeing. Every journey is
          personally designed by locals, connecting you to landscapes, people,
          and stories that don’t show up on tourist maps.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Start My Journey</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center space-x-2">
            <span>Explore Experiences</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Cultural Moments Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
            <h3 className="text-white font-semibold mb-2">Meet the Locals</h3>
            <p className="text-stone-300 text-sm">
              Connect with real people — from shepherds and artisans to tea shop
              storytellers. This isn’t tourism; it’s connection.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
            <h3 className="text-white font-semibold mb-2">Learn By Doing</h3>
            <p className="text-stone-300 text-sm">
              Cook wazwan with a local family. Camp under the Milky Way. Trek
              where only the locals go. Experience culture with your boots on.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
            <h3 className="text-white font-semibold mb-2">
              Travel That Gives Back
            </h3>
            <p className="text-stone-300 text-sm">
              Your trip supports small communities, responsible tourism, and
              traditional livelihoods — with no compromise on comfort or
              adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
