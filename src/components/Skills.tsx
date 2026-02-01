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
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-emerald-600 dark:bg-emerald-500 shadow-lg flex items-center justify-center">
              <Brain className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-1 bg-emerald-600 rounded-full" />
            <div className="w-3 h-3 bg-emerald-600 rounded-full" />
            <div className="w-16 h-1 bg-emerald-600 rounded-full" />
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500 dark:bg-emerald-600 shadow-lg mb-8">
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
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{skill.level}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default React.memo(Skills);
