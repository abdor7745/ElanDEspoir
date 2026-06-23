import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import abd from './public/images/abd (1).jpg';
import naf from './public/images/naf.jpg';

const testimonials = [
  {
    name: "Abdoul Rahim",
    role: "Patient",
    text: "L'accueil est chaleureux et le personnel très professionnel. J'ai été pris en charge rapidement pour une consultation générale. Je recommande vivement ce centre.",
    image: abd
  },
  
  {
    name: "Nafissatou",
    role: "Patiente",
    text: "Savoir que nous avons un centre de santé ouvert 24h/24 juste à côté nous rassure énormément. La propreté et la qualité du matériel sont au rendez-vous.",
    image: naf
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900"
          >
            Ce que disent nos patients.
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="text-primary-600 mb-6">
                <Quote size={40} fill="currentColor" className="opacity-10" />
              </div>
              <p className="text-slate-600 text-lg italic leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
