import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Media / Palace Images' },
    { id: 'weapons', name: 'Arms and Weapons' },
    { id: 'costumes', name: 'Royal Costume' },
    { id: 'interiors', name: 'Palace Interiors' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'interiors',
      title: 'Grand Palace Facade',
      description: 'The magnificent Indo-Saracenic architecture of Rajpipla Palace',
      image: 'https://images.pexels.com/photos/8135592/pexels-photo-8135592.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135592/pexels-photo-8135592.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      type: 'image',
      category: 'interiors',
      title: 'Royal Durbar Hall',
      description: 'The opulent Durbar Hall with crystal chandeliers and royal throne',
      image: 'https://images.pexels.com/photos/8471890/pexels-photo-8471890.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8471890/pexels-photo-8471890.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      type: 'video',
      category: 'interiors',
      title: 'Cultural Dance Performance',
      description: 'Traditional Gujarati folk dance in the palace courtyard',
      image: 'https://images.pexels.com/photos/7901416/pexels-photo-7901416.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/7901416/pexels-photo-7901416.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      type: 'image',
      category: 'weapons',
      title: 'Royal Crown Collection',
      description: 'Ornate crowns and tiaras from the royal treasury',
      image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      type: 'image',
      category: 'interiors',
      title: 'Palace Gardens at Sunset',
      description: 'The beautifully manicured gardens surrounding the palace',
      image: 'https://images.pexels.com/photos/8135591/pexels-photo-8135591.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135591/pexels-photo-8135591.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      type: 'image',
      category: 'interiors',
      title: 'Sheesh Mahal Mirror Work',
      description: 'Intricate mirror mosaic work in the palace\'s Sheesh Mahal',
      image: 'https://images.pexels.com/photos/8135590/pexels-photo-8135590.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135590/pexels-photo-8135590.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      type: 'image',
      category: 'interiors',
      title: 'Palace Entrance Gate',
      description: 'Ornate entrance with traditional Rajasthani architectural elements',
      image: 'https://images.pexels.com/photos/8135589/pexels-photo-8135589.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135589/pexels-photo-8135589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      type: 'video',
      category: 'interiors',
      title: 'Aerial View of Palace Complex',
      description: 'Drone footage showcasing the entire palace complex and surroundings',
      image: 'https://images.pexels.com/photos/8135588/pexels-photo-8135588.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135588/pexels-photo-8135588.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      type: 'image',
      category: 'weapons',
      title: 'Ancient Manuscripts',
      description: 'Rare manuscripts and historical documents from the royal library',
      image: 'https://images.pexels.com/photos/8135587/pexels-photo-8135587.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135587/pexels-photo-8135587.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 10,
      type: 'image',
      category: 'costumes',
      title: 'Festival Celebrations',
      description: 'Colorful festival celebrations in the palace courtyard',
      image: 'https://images.pexels.com/photos/8135586/pexels-photo-8135586.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135586/pexels-photo-8135586.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 11,
      type: 'image',
      category: 'interiors',
      title: 'Royal Bedroom Chamber',
      description: 'Luxurious royal bedroom with period furniture and decor',
      image: 'https://images.pexels.com/photos/8135585/pexels-photo-8135585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135585/pexels-photo-8135585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 12,
      type: 'image',
      category: 'interiors',
      title: 'Palace Courtyard',
      description: 'Central courtyard with traditional architectural details',
      image: 'https://images.pexels.com/photos/8135584/pexels-photo-8135584.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/8135584/pexels-photo-8135584.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setLightboxImage(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredItems.length
      : lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredItems[newIndex]);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Camera className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Palace Gallery
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Immerse yourself in the visual splendor of Rajpipla Palace through our comprehensive 
              collection of photographs and videos capturing its timeless beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-blue-900 mb-8">
              Visual Collections
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-yellow-100 border-2 border-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => openLightbox(item, index)}
              >
                <div className="aspect-square">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Video Icon */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                    <Play className="w-5 h-5 text-white fill-current" />
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 border-4 border-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No media found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-blue-200">High-Resolution Images</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-blue-200">Video Tours</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <p className="text-blue-200">Palace Chambers Documented</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">4K</div>
              <p className="text-blue-200">Ultra HD Quality</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-4xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="text-center mt-4 text-white max-w-2xl">
              <h3 className="text-2xl font-playfair font-bold mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-gray-300">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
