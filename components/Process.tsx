
import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Vision',
    description: 'We begin with an immersive consultation to understand your lifestyle, aspirations, and the unique soul of the site.'
  },
  {
    number: '02',
    title: 'Architectural Drafting',
    description: 'Our designers translate abstract visions into precise, high-fidelity blueprints and 3D sensory visualizations.'
  },
  {
    number: '03',
    title: 'Material Curation',
    description: 'We hand-select premium, sustainable materials—from Italian marble to native hardwoods—ensuring tactile excellence.'
  },
  {
    number: '04',
    title: 'Artisanal Construction',
    description: 'Execution with white-glove management. Our master builders treat every joint and finish as a work of art.'
  },
  {
    number: '05',
    title: 'The Handover',
    description: 'A seamless transition into your new legacy, accompanied by detailed documentation and a lifetime of support.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#0d0d0d] px-6 md:px-12 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/10 hidden md:block" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">The Aura Method</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">Our Defined Process</h3>
        </motion.div>

        <div className="space-y-24 md:space-y-0 relative">
          {STEPS.map((step, index) => (
            <div key={step.number} className={`flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 last:mb-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[42%] mb-8 md:mb-0"
              >
                <div className="flex items-center space-x-6 mb-6">
                  <span className="text-5xl md:text-7xl font-serif text-gold/20 leading-none">{step.number}</span>
                  <div className="h-px flex-grow bg-gold/30" />
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-6 tracking-wide">{step.title}</h4>
                <p className="text-stone/60 text-lg leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>

              {/* Center point marker */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold z-10 shadow-[0_0_15px_rgba(197,160,89,0.5)] border-4 border-charcoal" style={{ top: `${(index / (STEPS.length - 1)) * 100}%` }} />

              <div className="hidden md:block w-[42%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
