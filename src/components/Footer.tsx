import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo, navLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Name showcase section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            Dheeraj Sonkar
          </h2>
          
          <div className="h-1 w-32 bg-emerald-500 rounded-full mx-auto mb-4"></div>
          
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-base">
            Transforming ideas into digital reality
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4 mt-6">
            {[
              { icon: <Github size={20} />, href: personalInfo.github, label: "GitHub" },
              { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <div>
            <Link
              to="home"
              smooth={true}
              duration={0}
              className="text-2xl font-bold cursor-pointer inline-block"
            >
              <span className="text-emerald-400">Portfolio</span>
              <span className="text-emerald-500">.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-md text-sm leading-relaxed">
              A passionate Full Stack Developer focused on building beautiful interfaces & experiences that bring value to people's lives.
            </p>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Code size={10} className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Quick Links section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
              <div className="h-0.5 w-full bg-emerald-500 rounded-full mt-1"></div>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={0}
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer flex items-center text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-700 mr-2" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
              <div className="h-0.5 w-full bg-emerald-500 rounded-full mt-1"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { icon: <Mail size={14} />, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={14} />, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={14} />, value: personalInfo.location }
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 mr-2">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Call-to-action section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Let's Connect
              <div className="h-0.5 w-full bg-emerald-500 rounded-full mt-1"></div>
            </h3>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <p className="text-gray-900 dark:text-white text-sm font-medium">Available for new opportunities</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Interested in working together? Let's connect and discuss how I can help with your project.
              </p>
              
              <div className="flex items-center mb-4">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-xs">Available for freelance & full-time roles</span>
              </div>
              
              <button className="w-full py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
                <Link
                  to="contact"
                  smooth={true}
                  duration={0}
                  className="flex items-center justify-center"
                >
                  Get in touch 
                  <ExternalLink size={14} className="ml-2" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section */}
        <div className="relative pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
              © {currentYear} <span className="text-gray-700 dark:text-gray-400 font-medium">Dheeraj Sonkar</span>. All rights reserved.
            </p>
            
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm flex items-center">
              Crafted with 
              <Heart size={14} fill="currentColor" className="mx-1 text-red-500" />
              by <span className="text-gray-700 dark:text-gray-400 font-medium ml-1">Dheeraj Sonkar</span>
            </p>
          </div>
          
          {/* Back to top button */}
          <div className="absolute right-0 top-0 transform -translate-y-1/2">
            <Link
              to="home"
              smooth={true}
              duration={0}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer shadow-lg"
            >
              <ArrowUp size={18} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
