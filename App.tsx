import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrgencyBanner from './components/UrgencyBanner';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <UrgencyBanner />
        <Features />
        <ChatDemo />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Security />
        <FAQ />
      </main>
      <Footer />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>
    </div>
  );
};

export default App;