
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, BarChart3, Smartphone, ShieldCheck, PieChart } from 'lucide-react';

const Features: React.FC = () => {
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section 1: The New Normal */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Transforme seu celular na sua <br/>
              <span className="text-cyan-400">Central de Inteligência Financeira</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Pare de "achar" que sabe quanto gasta. Tenha certeza. A maioria das pessoas perde dinheiro porque tem preguiça de abrir aplicativos lentos. O Rotina Automática elimina a preguiça.
            </p>
          </div>

          <MotionDiv 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <MotionDiv variants={item} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Registro Relâmpago</h3>
              <p className="text-slate-400 leading-relaxed">
                Gastou? Escreveu. Comprou pão? Digite "Padaria 15". O sistema entende o texto e arquiva em segundos. É impossível esquecer.
              </p>
            </MotionDiv>

            <MotionDiv variants={item} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Relatórios em Texto</h3>
              <p className="text-slate-400 leading-relaxed">
                Esqueça gráficos coloridos que você nunca entende. Receba mensagens automáticas: "Total gasto hoje: R$ 45,00". Simples e direto.
              </p>
            </MotionDiv>

            <MotionDiv variants={item} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Resumos Automáticos</h3>
              <p className="text-slate-400 leading-relaxed">
                Seu "Gerente Pessoal" que presta contas. O sistema te envia o fechamento do dia proativamente. Gera consciência imediata.
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>

      </div>
    </section>
  );
};

export default Features;
