import React, { useState } from 'react';
import { Heart, Send, Globe, Clock, Users, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';

const CulturalImmersionForm: React.FC = () => {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelStyle: '',
    immersionLevel: '',
    interactionTypes: [] as string[],
    timeline: '',
    timelineFlexibility: '',
    specialInterests: [] as string[],
    personalMessage: '',
    previousExperiences: '',
    languagePreference: '',
    accommodationPreference: '',
    physicalLimitations: ''
  });

  const travelStyles = [
    { id: 'slow', label: 'Slow & Mindful', description: 'Deep connections over time' },
    { id: 'adventure', label: 'Adventure Seeker', description: 'Active cultural immersion' },
    { id: 'contemplative', label: 'Contemplative', description: 'Spiritual and reflective' },
    { id: 'family', label: 'Family Journey', description: 'Multi-generational experiences' },
    { id: 'solo', label: 'Solo Discovery', description: 'Personal transformation focus' }
  ];

  const immersionLevels = [
    { id: 'gentle', label: 'Gentle Introduction', description: 'Comfortable cultural exposure' },
    { id: 'moderate', label: 'Moderate Immersion', description: 'Balanced comfort and challenge' },
    { id: 'deep', label: 'Deep Immersion', description: 'Full cultural integration' },
    { id: 'transformative', label: 'Transformative', description: 'Life-changing experiences' }
  ];

  const interactionTypes = [
    'Traditional crafts learning',
    'Cooking with families',
    'Spiritual practices',
    'Agricultural activities',
    'Storytelling sessions',
    'Music and dance',
    'Healing practices',
    'Community service',
    'Language exchange',
    'Ceremonial participation'
  ];

  const specialInterests = [
    'Indigenous wisdom',
    'Traditional medicine',
    'Sustainable living',
    'Ancestral practices',
    'Textile arts',
    'Culinary traditions',
    'Spiritual practices',
    'Environmental conservation',
    'Community development',
    'Cultural preservation',
    'Mindfulness practices',
    'Storytelling traditions'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field: 'interactionTypes' | 'specialInterests', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // --- UPDATED SUBMIT FUNCTION ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // This object keys MATCH your EmailJS template variables exactly
    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        
        travelStyle: formData.travelStyle,
        immersionLevel: formData.immersionLevel,
        
        // Convert arrays to readable strings for the email
        interactionTypes: formData.interactionTypes.join(', '), 
        specialInterests: formData.specialInterests.join(', '),
        
        personalMessage: formData.personalMessage,
        previousExperiences: formData.previousExperiences,
        
        languagePreference: formData.languagePreference,
        accommodationPreference: formData.accommodationPreference,
        physicalLimitations: formData.physicalLimitations,

        // I included timeline here just in case you want to add it to your template later
        timeline: formData.timeline,
        timelineFlexibility: formData.timelineFlexibility
    };

    emailjs.send(
        'whatatrip',   // <--- REPLACE WITH ACTUAL SERVICE ID
        'whatatripcontact',  // <--- REPLACE WITH ACTUAL TEMPLATE ID
        templateParams,
        'wcZOuaAkyZfKhcCST'    // <--- REPLACE WITH ACTUAL PUBLIC KEY
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Thank you! Your journey details have been sent successfully.');
        setIsSending(false);
        // Optional: clear form
        // setFormData({ name: '', email: '', ... });
    })
    .catch((error) => {
        console.log('FAILED...', error.text);
        alert('Something went wrong. Please try again later.');
        setIsSending(false);
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-amber-600 mr-2" />
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900">
              Begin Your Cultural Journey
            </h1>
          </div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Share your story with us so we can connect you with the perfect cultural experience
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2 text-amber-600" />
                Tell Us About Yourself
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Language Preference
                  </label>
                  <select
                    name="languagePreference"
                    value={formData.languagePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select preference</option>
                    <option value="english">English</option>
                    <option value="local">Local language with translation</option>
                    <option value="mixed">Mixed languages</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-amber-600" />
                Your Travel Style
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {travelStyles.map((style) => {
              const isActive = formData.travelStyle === style.id;

                return (
                  <label key={style.id} className="cursor-pointer">
                  <input
                    type="radio"
                    name="travelStyle"
                    value={style.id}
                    checked={isActive}
                    onChange={handleInputChange}
                     className="sr-only"
               />

              <div
              className={`p-4 rounded-xl border-2 transition-all duration-200
                 ${
                 isActive
                ? 'border-teal-700 bg-teal-50'
                : 'border-stone-200 hover:border-stone-300'
            }
          `}
        >
          <h3
            className={`font-semibold mb-1 transition-colors duration-200
              ${isActive ? 'text-stone-100' : 'text-stone-700'}
            `}
          >
            {style.label}
          </h3>

          <p
            className={`text-sm transition-colors duration-200
              ${isActive ? 'text-stone-100' : 'text-stone-500'}
            `}
          >
            {style.description}
          </p>
        </div>
      </label>
    );
  })}
</div>
</div>

           {/* Cultural Immersion Level */}
<div>
  <h2 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center">
    <Sparkles className="h-6 w-6 mr-2 text-amber-600" />
    Cultural Immersion Level
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {immersionLevels.map((level) => {
      const isActive = formData.immersionLevel === level.id;

      return (
        <label key={level.id} className="cursor-pointer">
          <input
            type="radio"
            name="immersionLevel"
            value={level.id}
            checked={isActive}
            onChange={handleInputChange}
            className="sr-only"
          />

          <div
            className={`p-4 rounded-xl border-2 transition-all duration-200
              ${
                isActive
                  ? 'border-teal-700 bg-teal-50'
                  : 'border-stone-200 hover:border-stone-300'
              }
            `}
          >
            <h3
              className={`font-semibold mb-1 transition-colors duration-200
                ${isActive ? 'text-stone-100' : 'text-stone-900'}
              `}
            >
              {level.label}
            </h3>

            <p
              className={`text-sm transition-colors duration-200
                ${isActive ? 'text-stone-100' : 'text-stone-600'}
              `}
            >
              {level.description}
            </p>
          </div>
        </label>
      );
    })}
  </div>
</div>


            {/* Interaction Types */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                Preferred Interaction Types
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interactionTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interactionTypes.includes(type)}
                      onChange={() => handleArrayChange('interactionTypes', type)}
                      className="w-4 h-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                    />
                    <span className="text-sm text-stone-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-amber-600" />
                Timeline & Flexibility
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Within 1 month</option>
                    <option value="near">1-3 months</option>
                    <option value="medium">3-6 months</option>
                    <option value="long">6+ months</option>
                    <option value="flexible">Very flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Timeline Flexibility
                  </label>
                  <select
                    name="timelineFlexibility"
                    value={formData.timelineFlexibility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select flexibility</option>
                    <option value="fixed">Fixed dates</option>
                    <option value="somewhat">Somewhat flexible</option>
                    <option value="very">Very flexible</option>
                    <option value="completely">Completely flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Interests */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                Special Interests & Passions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specialInterests.map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.specialInterests.includes(interest)}
                      onChange={() => handleArrayChange('specialInterests', interest)}
                      className="w-4 h-4 text-teal-700 border-stone-300 rounded focus:ring-teal-500"
                    />
                    <span className="text-sm text-stone-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                Share Your Story
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    What draws you to cultural immersion experiences?
                  </label>
                  <textarea
                    name="personalMessage"
                    value={formData.personalMessage}
                    onChange={handleInputChange}
                    placeholder="Tell us about your motivations, what you hope to learn, and what kind of transformation you're seeking..."
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Previous cultural experiences (if any)
                  </label>
                  <textarea
                    name="previousExperiences"
                    value={formData.previousExperiences}
                    onChange={handleInputChange}
                    placeholder="Share any previous cultural immersion experiences or travels that have shaped your perspective..."
                    rows={3}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Additional Preferences */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6">
                Additional Considerations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Accommodation Preference
                  </label>
                  <select
                    name="accommodationPreference"
                    value={formData.accommodationPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select preference</option>
                    <option value="homestay">Homestay with families</option>
                    <option value="community">Community guesthouses</option>
                    <option value="mixed">Mixed accommodations</option>
                    <option value="eco">Eco-lodges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Physical considerations
                  </label>
                  <textarea
                    name="physicalLimitations"
                    value={formData.physicalLimitations}
                    onChange={handleInputChange}
                    placeholder="Any physical limitations or accessibility needs we should know about..."
                    rows={2}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSending}
                className={`bg-gradient-to-r from-amber-600 to-teal-700 text-white px-12 py-4 rounded-full hover:from-amber-700 hover:to-teal-800 transition-all duration-200 font-medium flex items-center space-x-2 mx-auto transform hover:scale-105 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send className="h-5 w-5" />
                <span>{isSending ? 'Sending...' : 'Begin My Journey'}</span>
              </button>
              <p className="text-sm text-stone-600 mt-4">
                We'll connect you with the perfect cultural experience within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CulturalImmersionForm;