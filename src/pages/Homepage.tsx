import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Users, Camera, MapPin } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: Crown,
      title: 'Royal Heritage',
      description: 'Explore 400 years of Gohil dynasty history and architectural magnificence',
      link: '/heritage',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Camera,
      title: 'Palace Gallery',
      description: 'Explore stunning photographs and visual collections of the palace',
      link: '/gallery',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Visit Information',
      description: 'Plan your visit with complete tourism and accommodation details',
      link: '/tourism',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Palace drone shoot 1 .mp4" type="video/mp4" />
          {/* Fallback background image if video fails to load */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/8135592/pexels-photo-8135592.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="animate-float"
          >
            <Crown className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Rajpipla Palace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              A Digital Heritage Journey Through the Magnificent Legacy of the Gohil Dynasty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/heritage" className="royal-btn inline-flex items-center px-8 py-4 text-lg">
                Explore Heritage <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/gallery" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center text-lg"
              >
                Gallery <Camera className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Welcome to Royal Rajpipla
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Nestled in the heart of Gujarat, Rajpipla Palace stands as a testament to the grandeur 
                and cultural richness of the Gohil dynasty. Built in the 17th century, this architectural 
                marvel showcases Indo-Saracenic design and houses centuries of royal heritage.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link} className="block">
                  <div className="royal-card bg-white rounded-xl p-8 text-center h-full shadow-lg hover:shadow-2xl">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-blue-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center text-yellow-600 font-semibold">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Palace Gallery
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Step into the visual grandeur of Rajpipla Palace through our curated collection
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: '/WhatsApp Image 2025-09-14 at 12.10.13_3afb98d0.jpg',
                title: 'Grand Architecture',
                description: 'Statue of Maharaja Vijaysinhji at Rajpipla'
              },
              {
                image: '/WhatsApp Image 2025-09-14 at 12.25.15_57e941b0 copy.jpg',
                title: 'Royal Interiors',
                description: 'The Grand Main Hall'
              },
              {
                image: '/WhatsApp Image 2025-09-14 at 01.35.33_b3f8c476.jpg',
                title: 'Cultural Artifacts',
                description: 'Ancient treasures and collections'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="royal-btn inline-flex items-center">
              View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Plan Your Royal Visit
            </h2>
            <p className="text-blue-800 text-lg mb-8 leading-relaxed">
              Experience the grandeur of Rajpipla Palace in person. Open daily with guided tours, 
              cultural programs, and exclusive accommodation at Rajvant Palace Resort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/tourism" 
                className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-300 inline-flex items-center text-lg font-semibold"
              >
                Visit Information <MapPin className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center text-lg font-semibold"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;