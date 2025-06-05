import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { MapPin, Mail, Phone, GraduationCap, Calendar, Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Dheeraj Sonkar" 
                className="rounded-lg shadow-xl w-full h-auto z-10 relative"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-6/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary-600 dark:text-primary-400" size={22} />
                Education
              </h3>
              
              <div className="space-y-4 pl-2 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">MCA - Master of Computer Applications</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">St. Andrews Institute of Technology and Management, Gurugram</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                    <Calendar size={14} className="mr-1" /> 2024 - 2026
                  </p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">BCA - Bachelor of Computer Applications</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Veer Bahadur Singh Purvanchal University, Jaunpur</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                    <Calendar size={14} className="mr-1" /> 2021 - 2024
                  </p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Intermediate</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">R.S.K.D Inter College, Jaunpur, U.P</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                    <Building size={14} className="mr-1" /> 2020 - 2021
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                  <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                  <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center md:col-span-2">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="/resume(dheeraj)1.pdf" 
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;