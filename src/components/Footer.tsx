import React from 'react';
import { Heart, Mail, MessageSquare, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img
              src="src/assets/logo-white.png"
              alt="What A Trip Logo"
              className="h-12 w-auto"
            />
            </div>
            <p className="text-stone-400 mb-4 font-light">
              Connecting adventurous souls with authentic local experiences that transform perspectives and create lasting bonds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cultural Experiences</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Artisan Workshops</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Culinary Journeys</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Spiritual Practices</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Traditional Healing</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Community Living</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Travel Guidelines</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Cultural Sensitivity</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Community Impact</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Sustainable Travel</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Traveler Stories</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-stone-400 font-light">
                  <a href="mailto:whatatripofficial@gmail.com" className="hover:text-amber-400 transition">
                  whatatripofficial@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-stone-400 font-light">
                  <a href="tel:+917028121353" className='hover:text-amber-400 transition'>+91 70 28 121 353</a>,
                  <a href="tel:+917006456372" className='hover:text-amber-400 transition'> +91 70 06 456 372</a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-10 w-10 text-amber-400" />
                <span className="text-stone-400 font-light">3rd Floor, Al Quds Mall, Bemina, Srinagar, Jammu & Kashmir – 190018</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 font-light mb-4 md:mb-0">
              &copy; 2024 What A Trip. Connecting hearts across cultures.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-light">Cultural Guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;