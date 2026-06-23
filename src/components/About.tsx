import { motion } from 'motion/react';
import { MapPin, Globe, Award, ShieldCheck } from 'lucide-react';
import abd2 from './public/images/abd (2).jfif';
import abd3 from './public/images/abd (3).jfif';
import abd5 from './public/images/abd (5).jfif';
import cheff from './public/images/cheff.jfif';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Image cluster */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src={abd2} 
                  alt="Clinic" 
                  className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
                <img 
                  src={abd3} 
                  alt="Doctor" 
                  className="w-full h-48 object-cover rounded-3xl shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src={cheff} 
                  alt="Equipment" 
                  className="w-full h-48 object-cover rounded-3xl shadow-xl"
                />
                <img 
                  src={abd5} 
                  alt="Patient" 
                  className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
              </div>
              
              {/* Floating year badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary-600 text-white p-8 rounded-[40px] shadow-2xl flex flex-col items-center border-[8px] border-slate-50">
                  <span className="text-4xl font-black">3+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-center mt-1">Ans d'expérience</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Notre Mission</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Un pilier de santé pour la communauté de To.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 mb-10 leading-relaxed">
              <p>
                Depuis plus de 3 ans, le CSPS <strong>Élan d'Espoir</strong> s'est imposé comme une référence en matière de soins de proximité au Burkina Faso. Notre vision est claire : garantir à chaque citoyen l'accès à une médecine de qualité, moderne et humaine.
              </p>
              <p>
                Nous ne sommes pas seulement un centre médical, nous sommes une famille dédiée au service de votre famille. Nos valeurs d'intégrité, de compassion et de professionnalisme guident chacune de nos actions.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Award className="text-primary-600" />, title: "Excellence Médicale", desc: "Soins basés sur les derniers protocoles." },
                { icon: <ShieldCheck className="text-secondary-600" />, title: "Approche Humaine", desc: "Le patient est au centre de tout." },
                { icon: <Globe className="text-blue-600" />, title: "Impact Local", desc: "Réduction des disparités de santé." },
                { icon: <MapPin className="text-red-600" />, title: "Accessibilité", desc: "Situé au cœur de votre quartier." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
