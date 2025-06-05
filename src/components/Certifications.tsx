import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="py-20 bg-gray-50 dark:bg-dark-800"
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
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Credentials that showcase my expertise and accomplishments
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index} 
              certification={certification}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: {
    title: string;
    issuer: string;
    date: string;
    certificate: string;
    image: string;
  };
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={certification.image} 
          alt={certification.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {certification.title}
        </h3>
        
        <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
          <span className="font-medium">{certification.issuer}</span>
        </div>
        
        <div className="flex items-center mb-5 text-gray-500 dark:text-gray-500 text-sm">
          <Calendar size={14} className="mr-1" />
          <span>{certification.date}</span>
        </div>
        
        <a 
          href={certification.certificate} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
        >
          View Certificate <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certifications;