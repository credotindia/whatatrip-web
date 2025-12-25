import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import logo from "../assets/logo-black.png";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experiences", label: "Experiences" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 max-w-[70px]">
            <img src={logo} alt="Logo" />
            {/* <Heart className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-stone-900">What A Trip</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-600 ${
                  activeSection === item.id
                    ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                    : "text-stone-700"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onSectionChange("connect")}
              className="bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors duration-200"
            >
              Start Your Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-stone-900" />
            ) : (
              <Menu className="h-6 w-6 text-stone-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-amber-600 bg-amber-0"
                      : "text-stone-700 hover:text-amber-600 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onSectionChange("connect");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors duration-200 mt-4"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
