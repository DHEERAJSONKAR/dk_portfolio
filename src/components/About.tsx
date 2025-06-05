import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { MapPin, Mail, Phone, GraduationCap, Calendar, Building, Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/10 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-secondary-50 dark:bg-secondary-900/10 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            About Me
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          <motion.div 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-5/12 lg:max-w-none mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800/40 dark:to-secondary-800/40 rounded-lg -z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"></div>
              <div className="image-shine rounded-lg shadow-xl z-10 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="About Dheeraj Sonkar" 
                  className="w-full h-auto z-10 relative transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold px-4 py-2 rounded-full bg-primary-600/80 backdrop-blur-sm text-sm transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-6/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gradient relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Who I Am
            </motion.h3>
            
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="mb-6 sm:mb-8">
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 mr-3 text-primary-600 dark:text-primary-400">
                  <GraduationCap size={20} />
                </div>
                Education
              </motion.h3>
              
              <div className="space-y-3 sm:space-y-4 pl-2 border-l-2 border-gradient-to-b from-primary-400 to-secondary-400 dark:from-primary-600 dark:to-secondary-600 text-sm sm:text-base">
                {[
                  {
                    degree: "MCA - Master of Computer Applications",
                    school: "St. Andrews Institute of Technology and Management, Gurugram",
                    period: "2024 - 2026",
                    icon: <Calendar size={14} />
                  },
                  {
                    degree: "BCA - Bachelor of Computer Applications",
                    school: "Veer Bahadur Singh Purvanchal University, Jaunpur",
                    period: "2021 - 2024",
                    icon: <Calendar size={14} />
                  },
                  {
                    degree: "Intermediate",
                    school: "R.S.K.D Inter College, Jaunpur, U.P",
                    period: "2020 - 2021",
                    icon: <Building size={14} />
                  }
                ].map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-4 sm:pl-6 hover:pl-8 transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ 
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white dark:bg-dark-900"></div>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">{edu.school}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                      {edu.icon} <span className="ml-1">{edu.period}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location, span: true }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center ${item.span ? 'sm:col-span-2' : ''} bg-gray-50 dark:bg-dark-800 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 scale-up`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center mr-3 text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="/resume(dheeraj)1.pdf" 
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base glow-on-hover"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} className="mr-2" />
              Download Resume
              <ExternalLink size={14} className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;