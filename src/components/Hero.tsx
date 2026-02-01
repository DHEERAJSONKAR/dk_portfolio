import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Code, Sparkles, Zap, Rocket, Star, Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-white dark:bg-dark-900"
    >
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Enhanced Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6">
            {/* Enhanced greeting badge with new colors */}
            <div className="inline-flex items-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-emerald-200/60 dark:border-slate-700/60 shadow-lg mb-3 sm:mb-4 text-sm sm:text-base">
              <Sparkles className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                Hello, I'm
              </span>
            </div>
            
            {/* Enhanced Name with new gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-emerald-600 to-cyan-700 bg-clip-text text-transparent dark:from-white dark:via-emerald-400 dark:to-cyan-400">
                {personalInfo.name}
              </span>
            </h1>
            
            {/* Enhanced role section with new gradient */}
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 mb-4 sm:mb-5 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-cyan-400 dark:to-purple-400">
                {personalInfo.title}
              </h2>
            </div>
            
            {/* Enhanced bio with reveal animation */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-5 sm:mb-6 max-w-2xl leading-relaxed px-2 sm:px-0">
              {personalInfo.bio}
            </p>
            
            {/* Enhanced action buttons with new colors */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6 px-2 sm:px-0">
              <div className="w-full sm:w-auto">
                <Link
                  to="projects"
                  smooth={true}
                  duration={0}
                  offset={-70}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 text-white font-bold rounded-2xl shadow-lg cursor-pointer text-sm sm:text-base hover:shadow-xl transition-shadow"
                >
                  <Rocket className="mr-2" size={18} />
                  <span>View Projects</span>
                </Link>
              </div>
              
              <div className="w-full sm:w-auto">
                <Link
                  to="contact"
                  smooth={true}
                  duration={0}
                  offset={-70}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-slate-800 dark:text-white font-bold rounded-2xl border border-emerald-200/60 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  <Zap className="mr-2" size={18} />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>

            {/* Enhanced social links with new colors */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {[
                { href: personalInfo.github, icon: Github, name: 'github', color: 'from-slate-700 to-slate-900' },
                { href: personalInfo.linkedin, icon: Linkedin, name: 'linkedin', color: 'from-cyan-600 to-cyan-800' },
                { href: "/resume(dheeraj)1.pdf", icon: Download, name: 'resume', color: 'from-emerald-500 to-emerald-700', download: true }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.download}
                  className="p-3 sm:p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl border border-emerald-200/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                >
                  <social.icon className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Enhanced Image Section with new colors */}
          <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Enhanced background layers with new colors */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-emerald-400/25 via-cyan-500/25 to-purple-600/25 rounded-full blur-2xl" />
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-emerald-300/35 to-cyan-500/35 rounded-full blur-xl" />

              {/* Main image container with enhanced effects */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white/60 dark:border-slate-700/60 shadow-2xl backdrop-blur-xl">
                  <img 
                    src="/director_photo.jpg" 
                    alt="Dheeraj Sonkar" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  
                  {/* Enhanced image overlay with new colors */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-transparent" />
                </div>

                {/* Minimal floating icons */}
                {[
                  { Icon: Code, color: 'from-emerald-500 to-emerald-700' },
                  { Icon: Star, color: 'from-cyan-500 to-cyan-700' }
                ].map(({ Icon, color }, i) => (
                  <div
                    key={i}
                    className={`absolute w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/80 dark:border-slate-700/80`}
                    style={{
                      top: `${20 + i * 40}%`,
                      left: i % 2 === 0 ? '-8%' : '108%',
                    }}
                  >
                    <Icon className="text-white" size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;