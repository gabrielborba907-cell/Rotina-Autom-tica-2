
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Fix for framer-motion type inference issues in some environments
  const MotionDiv = motion.div as any;

  const testimonials = [
    {
      text: "Eu sempre desistia de anotar gastos depois de 3 dias. Com o Rotina Automática, virou algo natural, igual responder um amigo. Simples e genial.",
      author: "Mariana L.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      text: "Cancelei 2 aplicativos pagos porque eles eram cheios de gráficos que eu não entendia. Aqui eu sei quanto gastei e quanto sobrou. Só isso importa.",
      author: "Bruno S.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      text: "A sensação de segurança que o fechamento diário dá é impagável. O sistema vira uma consciência financeira no seu bolso.",
      author: "Ricardo S.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            O que nossos <span className="text-cyan-400">usuários dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-100 p-8 rounded-3xl relative shadow-xl border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500 shadow-md">
                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-lg">{item.author}</h4>
                   <div className="flex gap-0.5">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                     ))}
                   </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed font-medium">
                "{item.text}"
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
