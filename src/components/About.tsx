import React from 'react';
import { personalInfo } from '../data';
import { MapPin, Mail, Phone, GraduationCap, Calendar, Building, Download, ExternalLink, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-600 dark:bg-emerald-500 shadow-lg mb-8">
            <User className="text-white" size={36} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <div className="w-2 h-2 bg-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full max-w-sm sm:max-w-md lg:w-5/12 px-4 sm:px-0">
            <div className="relative group">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="About Dheeraj Sonkar" 
                  className="w-full h-auto"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                      <h4 className="text-white font-bold text-lg mb-1">Full Stack Developer</h4>
                      <p className="text-white/80 text-sm">Passionate about creating amazing digital experiences</p>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-6/12">
            {/* Who I Am Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="p-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 mr-3 text-white shadow">
                  <GraduationCap size={20} />
                </div>
                Education Journey
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    degree: "MCA - Master of Computer Applications",
                    school: "St. Andrews Institute of Technology and Management, Gurugram",
                    period: "2024 - 2026",
                    icon: <Calendar size={14} />,
                    status: "Current"
                  },
                  {
                    degree: "BCA - Bachelor of Computer Applications",
                    school: "Veer Bahadur Singh Purvanchal University, Jaunpur",
                    period: "2021 - 2024",
                    icon: <Calendar size={14} />,
                    status: "Completed"
                  },
                  {
                    degree: "Intermediate",
                    school: "R.S.K.D Inter College, Jaunpur, U.P",
                    period: "2020 - 2021",
                    icon: <Building size={14} />,
                    status: "Completed"
                  }
                ].map((edu, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                          {edu.school}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          {edu.icon} <span className="ml-1">{edu.period}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "bg-red-500" },
                { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "bg-green-500" },
                { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location, span: true, color: "bg-blue-500" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`${item.span ? 'sm:col-span-2' : ''}`}
                >
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mr-3 text-white shadow`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-gray-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resume Button */}
            <a 
              href="/resume(dheeraj)1.pdf" 
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={18} className="mr-2" />
              <span>Download Resume</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
