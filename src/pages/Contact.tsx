import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Star } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    rating: 5,
    feedback: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setContactForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate feedback submission
    setTimeout(() => {
      toast.success('Thank you for your feedback! Your review helps us improve.');
      setFeedbackForm({ name: '', email: '', rating: 5, feedback: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 2640 220047',
      subtext: 'Available 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@rajpiplapace.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Rajpipla Palace, Narmada District',
      subtext: 'Gujarat, India - 393145'
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      details: 'Monday - Sunday',
      subtext: '9:00 AM - 6:00 PM'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'An absolutely magnificent experience! The palace tour was breathtaking and the virtual tour helped us plan our visit perfectly.',
      date: '2024-01-15'
    },
    {
      name: 'James Wilson',
      location: 'London, UK',
      rating: 5,
      comment: 'The heritage archive section is incredibly detailed. As a history enthusiast, I was thoroughly impressed with the documentation.',
      date: '2024-01-10'
    },
    {
      name: 'Raj Patel',
      location: 'Ahmedabad',
      rating: 4,
      comment: 'Beautiful palace with rich history. The museum collection is extensive and well-curated. Highly recommended for families.',
      date: '2024-01-08'
    },
    {
      name: 'Sarah Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'The virtual tour is amazing! It helped us explore before our actual visit. The website is very informative and user-friendly.',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-800 via-blue-800 to-indigo-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mail className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Contact & Feedback
            </h1>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              Get in touch with us for visit planning, queries, or share your experience 
              of exploring the magnificent Rajpipla Palace heritage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help you plan your perfect visit or answer any questions about our heritage platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-lg royal-card"
              >
                <info.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-bold text-blue-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-800 font-semibold mb-2">
                  {info.details}
                </p>
                <p className="text-gray-500 text-sm">
                  {info.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl font-bold text-blue-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full royal-btn flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map/Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-8"
            >
              <h3 className="font-playfair text-3xl font-bold text-blue-900 mb-6">
                Visit Location
              </h3>
              
              {/* Placeholder Map */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Rajpipla Palace, Gujarat</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Address</p>
                    <p className="text-gray-600">
                      Rajpipla Palace, Near Bus Stand<br />
                      Rajpipla, Narmada District<br />
                      Gujarat - 393145, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Best Time to Visit</p>
                    <p className="text-gray-600">
                      October to March (Pleasant Weather)<br />
                      Early morning tours recommended
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="text-sm text-gray-600">
                    <strong className="text-blue-900">Tip:</strong> Book your visit in advance during peak season (December-January) 
                    to ensure availability and get the best experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">
              Share Your Experience
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Your feedback helps us preserve and improve the heritage experience for future visitors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <h3 className="font-playfair text-2xl font-bold text-blue-900 mb-6">
                Leave a Review
              </h3>
              
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div>
                  <label htmlFor="feedbackName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="feedbackName"
                    required
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="feedbackEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="feedbackEmail"
                    required
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackForm({...feedbackForm, rating: star})}
                        className={`w-8 h-8 ${
                          star <= feedbackForm.rating ? 'text-yellow-500' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                    <span className="ml-3 text-gray-600 font-semibold">
                      {feedbackForm.rating} star{feedbackForm.rating !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Feedback *
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    required
                    value={feedbackForm.feedback}
                    onChange={(e) => setFeedbackForm({...feedbackForm, feedback: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-0 transition-colors resize-none"
                    placeholder="Share your experience with us..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full royal-btn flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Feedback <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Recent Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                What Visitors Say
              </h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-blue-200 text-sm">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed mb-2">
                      "{testimonial.comment}"
                    </p>
                    <p className="text-blue-300 text-xs">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;