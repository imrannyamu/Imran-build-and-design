
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-charcoal">
      {/* Background with subtle texture/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-8">Consultation</h2>
          <h3 className="text-4xl md:text-7xl font-serif text-white mb-12 leading-tight">
            Ready to Build <br /> Your <span className="italic">Legacy?</span>
          </h3>
          <p className="text-stone/60 max-w-2xl mx-auto mb-16 font-sans text-lg leading-relaxed">
            Every masterpiece begins with a conversation. Let’s discuss how we can bring your architectural vision to life with precision and soul.
          </p>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-6 px-12 py-6 border border-gold text-gold text-xs tracking-[0.3em] uppercase font-bold hover:bg-gold hover:text-charcoal transition-all duration-500"
            >
              <span>Begin the Journey</span>
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
