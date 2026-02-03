
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/10 py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-serif text-white">IMRAN</span>
              <span className="block text-[10px] tracking-[0.4em] text-gold uppercase">Build & Design</span>
            </Link>
            <p className="text-stone/60 max-w-sm font-sans leading-relaxed">
              Crafting architectural legacies that transcend time. From modern residential sanctuaries to bold commercial landmarks.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-4 text-stone/80 font-sans text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Craft</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Connect</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Connect</h4>
            <div className="flex space-x-6 text-stone/60">
              <a href="https://www.instagram.com/_.imuu.vvs._/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/254793710082" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] tracking-widest text-stone/40 uppercase">
          <p>© 2024 Imran Build & Design. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
