import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Calendar, MapPin, Users, Scroll, Building } from 'lucide-react';

const HeritageArchive = () => {
  const timelineEvents = [
    {
      year: '1340',
      title: 'Establishment of Rajpipla State',
      description: 'Maharana Arjunsinhji Gohil founded the Rajpipla State under the Gohil Rajput dynasty',
      icon: Crown
    },
    {
      year: '1860',
      title: 'Reign of Maharana Gambhirsinhji',
      description: 'Maharana Gambhirsinhji Verisalji Sahib ascended the throne and implemented administrative reforms',
      icon: Crown
    },
    {
      year: '1915',
      title: 'Ascension of Maharaja Vijaysinhji',
      description: 'Maharaja Vijaysinhji Chhatrasinhji became the ruler and modernized the state\'s infrastructure',
      icon: Calendar
    },
    {
      year: '1948',
      title: 'Integration with India',
      description: 'Rajpipla State peacefully merged with the Indian Union on 10th June 1948',
      icon: MapPin
    }
  ];

  const royalFigures = [
    {
      name: 'Maharaja Vijaysinghji',
      reign: '1890-1951',
      image: '/WhatsApp Image 2025-09-14 at 01.20.48_1594c922.jpg',
      achievements: [
        'Progressive ruler who modernized Rajpipla State',
        'Established educational institutions',
        'Promoted arts, architecture, and cultural development',
        'Implemented social welfare programs for citizens'
      ]
    },
    {
      name: 'Maharaja Mohansinghji I',
      reign: '1640-1685',
      image: 'https://images.pexels.com/photos/8471891/pexels-photo-8471891.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: [
        'Founder of Rajpipla State',
        'Established the Gohil dynasty rule',
        'Built the foundation of the kingdom',
        'Created administrative framework'
      ]
    }
  ];

  const architecturalHighlights = [
    {
      title: 'Durbar Hall',
      description: 'Grand ceremonial hall with intricate mirror work and chandeliers',
      features: ['Venetian chandeliers', 'Belgian mirrors', 'Marble pillars', 'Royal throne']
    },
    {
      title: 'Zenana Mahal',
      description: 'Private quarters for royal ladies with beautiful jali work',
      features: ['Carved stone jalis', 'Private courtyards', 'Fountain gardens', 'Painted ceilings']
    },
    {
      title: 'Sheesh Mahal',
      description: 'Mirror palace with thousands of tiny mirrors creating magical reflections',
      features: ['Mirror mosaics', 'Crystal work', 'Ambient lighting', 'Geometric patterns']
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Heritage Archive
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Journey through four centuries of royal legacy, architectural grandeur, 
              and the magnificent history of the Gohil dynasty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Historical Timeline
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore the key moments that shaped the legacy of Rajpipla Palace
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-400"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg royal-card">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-4">
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">{event.year}</div>
                    <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Figures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Royal Legacy
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the visionary rulers who shaped the destiny of Rajpipla
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {royalFigures.map((figure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={figure.image} 
                    alt={figure.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mr-6"
                  />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-blue-900">
                      {figure.name}
                    </h3>
                    <p className="text-yellow-600 font-semibold">{figure.reign}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {figure.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <Crown className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Highlights */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">
              Architectural Marvels
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Discover the intricate craftsmanship and artistic brilliance of palace chambers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architecturalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-xl royal-card"
              >
                <Building className="w-12 h-12 text-yellow-600 mb-6" />
                <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="space-y-2">
                  {highlight.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeritageArchive;