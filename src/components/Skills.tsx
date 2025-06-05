import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
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
            My Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Here are the technologies and skills I've been working with
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary-500 dark:bg-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Github', 'SQL', 'TypeScript', 'Next.js', 'Angular.js', '.Net',  'Firebase'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;