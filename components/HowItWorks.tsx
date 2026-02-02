
import React from 'react';
import { motion } from 'framer-motion';
import { Link, MessageCircle, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  // Use a type-casted motion component to fix phantom TypeScript errors
  const MotionDiv = motion.div as any;

  const steps = [
    {
      icon: <Link className="w-8 h-8 text-cyan-400" />,
      title: "1. Garanta seu acesso",
      description: 'Você vai receber um link direto pro WhatsApp. É só clicar e começar.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: '2. Mande um "oi"',
      description: "O Rotina Automática te dá boas-vindas e já pergunta como você quer organizar seu dinheiro - fácil e rápido."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-400" />,
      title: "3. Pronto!",
      description: "Registros, relatórios e alertas direto no seu zap. X Nada de planilhas. Nada de apps."
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            É tão fácil que até a Tia do Zap usa pra se organizar, rs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-slate-900/40 border border-white/5 p-8 rounded-2xl group hover:bg-slate-900/60 hover:border-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Connector Line (Desktop) - Only show between items */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-950 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
