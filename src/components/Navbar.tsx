import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-600/30 rotate-3 group-hover:rotate-0 transition-transform">
              <HeartPulse size={28} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">Élan <span className="text-primary-600">d'Espoir</span></span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">CSPS To</span>
              <div className="h-[1px] w-4 bg-primary-200" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 py-1 px-4 bg-red-50 text-red-600 rounded-full border border-red-100 animate-pulse">
          <Phone size={14} className="fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Urgence : {CLINIC_INFO.phone}</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment"
            className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 active:scale-95"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment"
                className="bg-primary-600 text-white text-center py-4 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Prendre Rendez-vous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
