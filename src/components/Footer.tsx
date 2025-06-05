import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo, navLinks } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary-500">.</span>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              A passionate Full Stack Developer focused on building beautiful interfaces & experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li className="text-gray-400">
                  {personalInfo.phone}
                </li>
                <li className="text-gray-400">
                  {personalInfo.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by {personalInfo.name}
            </p>
          </div>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="absolute right-0 top-0 transform -translate-y-1/2 w-10 h-10 bg-primary-600 hover:bg-primary-700 flex items-center justify-center rounded-full cursor-pointer transition-colors"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;