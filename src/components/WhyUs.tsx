import { motion } from 'motion/react';
import { ShieldCheck, Banknote, Heart, Clock } from 'lucide-react';

const features = [
  {
    title: "Personnel Qualifié",
    desc: "Nos médecins et infirmiers sont rigoureusement sélectionnés pour leur expertise et leur dévouement.",
    icon: <ShieldCheck size={32} />,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    title: "Soins Accessibles",
    desc: "Nous pratiquons des tarifs encadrés pour que la santé ne soit plus un luxe mais un droit pour tous.",
    icon: <Banknote size={32} />,
    color: "text-emerald-600",
    bg: "bg-emerald-100"
  },
  {
    title: "Accueil Chaleureux",
    desc: "Parce que la guérison commence par un sourire, nous vous recevons avec bienveillance et humanité.",
    icon: <Heart size={32} />,
    color: "text-rose-600",
    bg: "bg-rose-100"
  },
  {
    title: "Disponibilité 24h/24",
    desc: "Le jour comme la nuit, nos équipes sont mobilisées pour répondre à vos besoins de santé urgents.",
    icon: <Clock size={32} />,
    color: "text-amber-600",
    bg: "bg-amber-100"
  }
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Pourquoi nous ?
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-slate-900 mb-6"
            >
              Une approche de soin <span className="text-primary-600">différente.</span>
            </motion.h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Au CSPS Élan d'Espoir, nous ne nous contentons pas de traiter les symptômes. Nous nous engageons à comprendre chaque patient dans sa globalité, en offrant des soins personnalisés, empreints de compassion et d'expertise. Notre objectif est de bâtir une relation de confiance durable avec chaque membre de notre communauté.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
