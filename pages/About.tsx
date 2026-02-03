
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import CTA from '../components/CTA';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="container mx-auto px-6 md:px-12">
        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32 md:mb-56 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-8">The Craft</h2>
            <h3 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
              Building Beyond the <span className="italic">Blueprint.</span>
            </h3>
            <div className="space-y-6 text-stone/70 font-sans text-lg leading-relaxed">
              <p>
                Founded in 2012, Imran Build & Design emerged from a desire to bridge the gap between high-art architecture and structural engineering. We believe every project is a narrative waiting to be told.
              </p>
              <p>
                Our philosophy is simple: listen to the landscape, respect the materials, and never settle for ordinary. We source only the finest sustainable stone and timber, ensuring that every Imran build is as enduring as it is beautiful.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-gold p-8 md:p-12 w-2/3 hidden md:block">
              <p className="text-charcoal font-serif text-2xl">"Architecture is a visual art, and the buildings speak for themselves."</p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-24">
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">The Visionaries</h2>
            <h3 className="text-4xl md:text-6xl font-serif">Behind the Name</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col border-t border-gold/10 pt-10"
              >
                <div className="mb-8">
                  <h4 className="text-3xl font-serif text-white mb-2">{member.name}</h4>
                  <p className="text-gold text-xs tracking-widest uppercase">{member.role}</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-4 top-0 text-gold/20 text-6xl font-serif">"</span>
                  <p className="text-stone/60 text-base leading-relaxed font-sans italic relative z-10 pl-2">
                    {member.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <CTA />
    </div>
  );
};

export default About;
