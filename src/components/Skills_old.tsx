import React from 'react';
import { skills } from '../data';
import { Code, Brain, Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-16 sm:py-24 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-indigo-600 dark:bg-indigo-500 shadow-lg flex items-center justify-center">
              <Brain className="text-white" size={28} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-1 bg-indigo-600 rounded-full" />
            <div className="w-3 h-3 bg-indigo-600 rounded-full" />
            <div className="w-16 h-1 bg-indigo-600 rounded-full" />
          </div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Mastering cutting-edge technologies and frameworks to build exceptional digital experiences
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        
        {/* Additional Technologies */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500 dark:bg-yellow-600 shadow-lg mb-8">
            <Trophy className="text-white" size={28} />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Github', 'SQL', 'TypeScript', 'Next.js', 'Angular.js', '.Net', 'Firebase'].map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 rounded-xl text-sm font-bold bg-white dark:bg-dark-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 shadow hover:shadow-lg transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
    >
      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="relative p-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl overflow-hidden"
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 60%)",
              "radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 60%)",
              "radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 60%)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10">
          <motion.div 
            className="flex justify-between items-center mb-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {skill.name}
            </h3>
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="text-indigo-500" size={20} />
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {skill.level}%
              </span>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative w-full h-4 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0, x: "-100%" }}
              whileInView={{ 
                width: `${skill.level}%`,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            />
            
            {/* Animated highlight */}
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1 + 1.5,
              }}
              style={{ width: `${skill.level}%` }}
            />
          </div>

          {/* Skill Level Indicator */}
          <motion.div 
            className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
          >
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
            <span>Expert</span>
          </motion.div>
        </div>

        {/* Floating Skill Icons */}
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-2 h-2 bg-indigo-400/40 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [-5, -15, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5 + Math.random(),
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Skills);