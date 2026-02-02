
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Cloud } from 'lucide-react';

const Security: React.FC = () => {
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  return (
    <section className="py-20 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" /> Segurança Total
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Sua privacidade é <span className="text-emerald-400">blindada</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <MotionDiv 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-emerald-500/20 transition-all"
          >
            <Lock className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Criptografia de Ponta a Ponta</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Utilizamos a segurança nativa do WhatsApp. Suas mensagens são protegidas. Apenas você e o sistema têm acesso.
            </p>
          </MotionDiv>

          <MotionDiv 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-emerald-500/20 transition-all"
          >
            <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Seus Dados São Seus</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Não vendemos suas informações e não utilizamos seus dados financeiros para treinar inteligências artificiais públicas.
            </p>
          </MotionDiv>

          <MotionDiv 
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-emerald-500/20 transition-all"
          >
            <Cloud className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Backup Automático</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trocou de celular? Seus dados continuam salvos na nuvem segura. Você nunca perde seu histórico financeiro.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Security;
