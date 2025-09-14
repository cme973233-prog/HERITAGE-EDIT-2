import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="font-playfair font-bold text-xl">Rajpipla Palace</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              A magnificent testament to the rich heritage and royal legacy of the Gohil dynasty, 
              Rajpipla Palace stands as a beacon of Gujarat's cultural magnificence and architectural grandeur.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                <span className="text-white font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                <span className="text-white font-semibold">t</span>
              </div>
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                <span className="text-white font-semibold">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: '/heritage', label: 'Heritage Archive' },
                { path: '/tourism', label: 'Tourism Info' },
                { path: '/gallery', label: 'Gallery' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4 text-yellow-400">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200">
                  Rajpipla, Narmada District<br />
                  Gujarat, India - 393145
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">+91 2640 220047</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">info@rajpiplapace.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-blue-200">
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="text-sm">Open All Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            © 2024 Rajpipla Palace. All rights reserved. | Preserving Heritage, Inspiring Generations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;