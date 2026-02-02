
import React, { useState, useEffect } from 'react';
import { Infinity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    window.open('https://pay.cakto.com.br/qcjqru5_672232', '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="p-2 bg-cyan-500/10 rounded-full border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Infinity className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-100">
            Rotina <span className="text-cyan-400">Automática</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Funcionalidades</button>
          <button onClick={() => scrollToSection('security')} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Segurança</button>
          <Button variant="outline" className="!py-2 !px-4 text-sm" onClick={handleCheckout}>
            QUERO MEU ACESSO
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Funcionalidades</button>
              <button onClick={() => scrollToSection('security')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Segurança</button>
              <Button fullWidth onClick={handleCheckout}>
                QUERO MEU ACESSO
              </Button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
