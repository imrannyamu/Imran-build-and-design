
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import CTA from '../components/CTA';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Cultural'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Portfolio</h1>
            <h2 className="text-5xl md:text-7xl font-serif">A Legacy in <br /> <span className="italic">Perspective</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-6 text-[10px] tracking-widest uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-2 border-b-2 transition-all duration-300 ${filter === cat ? 'border-gold text-gold' : 'border-transparent text-stone/40 hover:text-stone'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-charcoal">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-[10px] tracking-widest uppercase text-stone/40 mt-1">{project.category}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-stone/40 group-hover:border-gold group-hover:text-gold transition-all"
                  >
                    ↗
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <CTA />
    </div>
  );
};

export default Projects;
