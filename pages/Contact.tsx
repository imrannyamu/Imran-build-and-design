
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Connect</h1>
            <h2 className="text-5xl md:text-7xl font-serif">Start Your Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-serif mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 text-stone/60 group">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Email</p>
                      <a href="mailto:imrannyamu@gmail.com" className="text-stone hover:text-gold transition-colors">imrannyamu@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-stone/60 group">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Phone</p>
                      <a href="tel:0793710082" className="text-stone hover:text-gold transition-colors">0793710082</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-stone/60 group">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold mb-1">WhatsApp</p>
                      <a href="https://wa.me/254793710082" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-gold transition-colors">Chat with us</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-stone/60 group">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Studio</p>
                      <p className="text-stone">Nairobi, Kenya CBD</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="h-64 bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-center grayscale" />
                <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">View on Map</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-3 bg-white/[0.02] border border-white/5 p-8 md:p-12"
            >
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-4 text-stone focus:outline-none focus:border-gold transition-all peer"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-4 text-stone/40 text-xs tracking-widest uppercase pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-4 text-stone focus:outline-none focus:border-gold transition-all peer"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-4 text-stone/40 text-xs tracking-widest uppercase pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-4 text-stone focus:outline-none focus:border-gold transition-all peer resize-none"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-4 text-stone/40 text-xs tracking-widest uppercase pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4"
                  >
                    Project Details
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-gold text-charcoal text-xs tracking-[0.3em] uppercase font-bold flex items-center justify-center space-x-4 hover:bg-stone transition-colors"
                >
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
