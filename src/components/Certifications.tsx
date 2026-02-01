import React from 'react';
import { certifications } from '../data/index';
import { Award, Calendar, ExternalLink, Building } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificate: string;
  image: string;
  credentialId?: string;
}

const Certifications: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="py-16 sm:py-24 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-emerald-600 dark:bg-emerald-500 shadow-lg flex items-center justify-center">
              <Award className="text-white" size={32} />
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 px-4">
            Certifications & Achievements
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <div className="w-2 h-2 bg-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
          </div>
          
          {/* Description */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4">
            Professional certifications and notable achievements that showcase my technical expertise and commitment to excellence
          </p>
          
          {/* Achievement Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">2+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Certifications</div>
            </div>
            
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Achievements</div>
            </div>
            
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">99%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Verified</div>
            </div>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index} 
              certification={certification as Certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
      {/* Certificate Image Section */}
      <div className="relative h-48 md:h-56 bg-gray-100 dark:bg-dark-700">
        {certification.image ? (
          <div className="relative w-full h-full p-2">
            <img 
              src={certification.image} 
              alt={`${certification.title} certificate`}
              className="w-full h-full object-contain bg-white dark:bg-dark-600 rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-24 md:w-40 md:h-28 rounded-xl bg-emerald-600 dark:bg-emerald-500 shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full p-3">
                <div className="absolute inset-2 bg-white dark:bg-dark-700 rounded-lg">
                  <div className="absolute top-1 left-2 right-2 h-0.5 bg-emerald-600 rounded-full"></div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Award className="text-emerald-600 dark:text-emerald-400 mb-1" size={20} />
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-14 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-1"></div>
                    <div className="w-8 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-emerald-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Certificate Number Badge */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {certification.title}
        </h3>
        
        {/* Issuer */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <Building size={16} className="mr-2 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="line-clamp-1">{certification.issuer}</span>
        </div>
        
        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-2 flex-shrink-0" />
          <span>{certification.date}</span>
        </div>
        
        {/* Credential ID */}
        {certification.credentialId && (
          <div className="mb-4 p-2 bg-gray-100 dark:bg-dark-700 rounded text-xs text-gray-600 dark:text-gray-400">
            <span className="font-semibold">ID:</span> {certification.credentialId}
          </div>
        )}
        
        {/* View Certificate Button */}
        <a 
          href={certification.certificate} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
        >
          <ExternalLink size={16} className="mr-2" />
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default React.memo(Certifications);
