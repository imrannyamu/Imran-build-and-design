
import React, { useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Layout, PenTool, ShieldCheck, Star, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERTISE, PROJECTS, REVIEWS, FAQS } from '../constants';
import CTA from '../components/CTA';
import Process from '../components/Process';

const Home: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  const iconMap: Record<string, any> = {
    Compass: <Compass className="text-gold mb-6" size={32} />,
    Layout: <Layout className="text-gold mb-6" size={32} />,
    PenTool: <PenTool className="text-gold mb-6" size={32} />,
    ShieldCheck: <ShieldCheck className="text-gold mb-6" size={32} />,
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? "fill-gold text-gold" : "text-stone/20"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 pt-32 md:pt-0 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Architecture <br />
              <span className="italic text-gold">Refined.</span>
            </h1>
            <p className="text-stone/70 text-lg md:text-xl font-sans mb-12 leading-relaxed max-w-md">
              Imran translates vision into stone, light into legacy. We design spaces that don't just exist—they breathe.
            </p>
            <Link to="/projects" className="group flex items-center space-x-4 text-xs tracking-widest uppercase text-white hover:text-gold transition-colors">
              <span>View Portfolio</span>
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden">
          {/* Ken Burns Effect Image */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ 
              scale: 1.15,
              opacity: 1 
            }}
            transition={{ 
              scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" },
              opacity: { duration: 1.5 }
            }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale-[20%] brightness-[0.7]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/20 to-transparent md:block hidden z-[1]" />
          <div className="absolute inset-0 bg-charcoal/30 z-[1]" />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-40 bg-charcoal overflow-hidden px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Uncompromising Craftsmanship</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERTISE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 bg-white/[0.02]"
              >
                {iconMap[item.icon]}
                <h4 className="text-xl font-serif mb-4 text-white">{item.title}</h4>
                <p className="text-stone/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Featured Projects */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Featured Works</h3>
          </motion.div>
          <Link to="/projects" className="hidden md:flex items-center space-x-2 text-stone/40 hover:text-gold transition-colors text-xs uppercase tracking-widest">
            <span>Explore All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 scrollbar-hide snap-x gap-8 no-scrollbar">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[300px] md:w-[450px] snap-center"
            >
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold text-[10px] uppercase tracking-widest mb-2">{project.category}</span>
                  <h4 className="text-2xl font-serif text-white">{project.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-40 bg-charcoal px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Client Perspectives</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative p-8 md:p-12 bg-white/[0.02] border border-white/5"
              >
                {renderStars(review.rating)}
                <p className="text-stone/70 text-lg font-serif italic mb-8 leading-relaxed">
                  "{review.content}"
                </p>
                <div className="border-t border-gold/10 pt-6">
                  <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase">{review.author}</h4>
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase mt-1">{review.projectType}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Inquiries</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Frequently Asked Questions</h3>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${openFaqId === faq.id ? 'text-gold' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-500 ${openFaqId === faq.id ? 'rotate-180 text-gold' : 'text-stone/40'}`}>
                    {openFaqId === faq.id ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-stone/60 font-sans leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Home;
