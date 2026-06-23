import { motion } from 'motion/react';
import { Stethoscope, Syringe, Baby, Activity, Pill, FlaskConical, HeartPulse, Clock, Phone } from 'lucide-react';

const services = [
  {
    title: "Consultation Générale",
    desc: "Diagnostic complet et suivi personnalisé par nos médecins généralistes expérimentés.",
    icon: <Stethoscope size={28} />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Vaccination",
    desc: "Protection pour toute la famille avec les vaccins essentiels et le suivi du carnet.",
    icon: <Syringe size={28} />,
    color: "bg-emerald-50 text-emerald-600"
  },

  {
    title: "Urgences 24h/24",
    desc: "Une équipe réactive prête à intervenir à tout moment pour les soins critiques.",
    icon: <Activity size={28} />,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Pharmacie",
    desc: "Large gamme de médicaments essentiels disponibles sur place pour votre confort.",
    icon: <Pill size={28} />,
    color: "bg-amber-50 text-amber-600"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Nos Services Médicaux
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Des soins complets pour <br /> une vie plus saine.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Nous proposons une large gamme de prestations médicales pour répondre 
            efficacement aux besoins de la communauté.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-600/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary-600 font-bold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <Clock size={16} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-primary-900 rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative"
        >
          {/* Subtle pattern background for the banner */}
          <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 pointer-events-none p-4">
            {Array.from({ length: 40 }).map((_, i) => (
              <HeartPulse key={i} size={40} />
            ))}
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-4">Besoin d'un diagnostic urgent ?</h3>
            <p className="text-primary-200 text-lg max-w-xl">
              Notre service de garde est opérationnel 24h/24 pour toutes vos situations d'urgence. 
              Pas besoin de rendez-vous pour les cas critiques.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a href="tel:+22666950044" className="px-8 py-4 bg-white text-primary-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-50 transition-colors">
              <Phone size={20} />
              SOS Urgence : +226 66 95 00 44
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
