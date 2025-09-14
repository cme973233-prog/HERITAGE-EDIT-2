import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star, Car, Utensils, Bed, Camera } from 'lucide-react';

const Tourism = () => {
  const visitInfo = {
    hours: 'Monday - Sunday: 9:00 AM - 6:00 PM',
    entryFee: {
      indian: '₹50 per person',
      foreign: '₹500 per person',
      children: '₹25 per person (below 12 years)',
      group: '₹40 per person (group of 20+)'
    },
    contact: '+91 2640 220047',
    location: 'Rajpipla, Narmada District, Gujarat - 393145'
  };

  const nearbyAttractions = [
    {
      name: 'Sardar Sarovar Dam',
      distance: '25 km',
      description: 'One of India\'s largest dams with spectacular views and boating facilities',
      image: 'https://images.pexels.com/photos/8135592/pexels-photo-8135592.jpeg?auto=compress&cs=tinysrgb&w=600',
      attractions: ['Dam viewpoint', 'Boating', 'Light & Sound show', 'Gardens']
    },
    {
      name: 'Statue of Unity',
      distance: '30 km',
      description: 'World\'s tallest statue dedicated to Sardar Vallabhbhai Patel',
      image: 'https://images.pexels.com/photos/7901416/pexels-photo-7901416.jpeg?auto=compress&cs=tinysrgb&w=600',
      attractions: ['High-speed elevator', 'Museum', 'Valley of Flowers', 'River cruise']
    },
    {
      name: 'Shoolpaneshwar Wildlife Sanctuary',
      distance: '40 km',
      description: 'Dense forest sanctuary with diverse wildlife and trekking trails',
      image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600',
      attractions: ['Wildlife safari', 'Trekking', 'Bird watching', 'Nature photography']
    }
  ];

  const accommodations = [
    {
      name: 'Rajvant Palace Resort',
      type: 'Heritage Hotel',
      rating: 4.5,
      price: '₹8,500 - ₹15,000',
      description: 'Experience royal luxury in this heritage hotel within the palace complex',
      amenities: ['Royal suites', 'Fine dining', 'Spa services', 'Cultural programs'],
      image: 'https://images.pexels.com/photos/8471890/pexels-photo-8471890.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Narmada Resort',
      type: 'Modern Resort',
      rating: 4.0,
      price: '₹4,500 - ₹7,500',
      description: 'Contemporary resort with river views and modern amenities',
      amenities: ['River view rooms', 'Swimming pool', 'Multi-cuisine restaurant', 'Conference hall'],
      image: 'https://images.pexels.com/photos/8135591/pexels-photo-8135591.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const tourPackages = [
    {
      title: 'Heritage Day Tour',
      duration: '1 Day',
      price: '₹2,500 per person',
      includes: ['Palace tour', 'Museum visit', 'Lunch', 'Guide'],
      highlights: ['Complete palace exploration', 'Cultural performance', 'Traditional meal']
    },
    {
      title: 'Royal Weekend',
      duration: '2 Days / 1 Night',
      price: '₹12,000 per person',
      includes: ['Heritage hotel stay', 'All meals', 'Guided tours', 'Cultural evening'],
      highlights: ['Luxury accommodation', 'Royal dining experience', 'Special ceremonies']
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 via-blue-800 to-teal-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Tourism Information
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Plan your perfect visit to Rajpipla Palace with comprehensive travel information, 
              nearby attractions, and exclusive accommodation options
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Visitor Information
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know for your visit to Rajpipla Palace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg royal-card"
            >
              <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                Opening Hours
              </h3>
              <p className="text-gray-600">{visitInfo.hours}</p>
              <p className="text-sm text-yellow-600 mt-2">Open all days including holidays</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg royal-card"
            >
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                Entry Fees
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Indians: {visitInfo.entryFee.indian}</p>
                <p>Foreigners: {visitInfo.entryFee.foreign}</p>
                <p>Children: {visitInfo.entryFee.children}</p>
                <p className="text-yellow-600">Groups: {visitInfo.entryFee.group}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg royal-card"
            >
              <Phone className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                Contact
              </h3>
              <p className="text-gray-600 mb-2">{visitInfo.contact}</p>
              <p className="text-sm text-gray-500">For bookings and inquiries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg royal-card"
            >
              <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                Location
              </h3>
              <p className="text-gray-600 text-sm">{visitInfo.location}</p>
              <p className="text-sm text-yellow-600 mt-2">Easy road connectivity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Nearby Attractions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore the magnificent attractions around Rajpipla Palace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg royal-card"
              >
                <div className="relative">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.distance}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-blue-900 mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {attraction.description}
                  </p>
                  
                  <div className="space-y-2">
                    {attraction.attractions.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <Camera className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Accommodation Options
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our curated selection of hotels and resorts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg royal-card"
              >
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-playfair text-xl font-bold text-blue-900">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-yellow-600 font-semibold mb-2">{hotel.type}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {hotel.description}
                  </p>
                  
                  <div className="border-t pt-4 mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center">
                          <Bed className="w-3 h-3 text-yellow-600 mr-1 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-900 font-bold text-lg">{hotel.price}</span>
                    <button className="royal-btn text-sm px-4 py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">
              Tour Packages
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Choose from our specially curated tour packages for the perfect experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-xl royal-card"
              >
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-blue-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-yellow-600 font-semibold">{pkg.duration}</p>
                  <div className="text-3xl font-bold text-blue-900 mt-4">{pkg.price}</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="w-full royal-btn mt-6">
                  Book Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;