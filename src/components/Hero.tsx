import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import hero from './public/images/heroo.jfif';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-600 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            Habilité & Certifié par l'État
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Votre santé, <br />
            <span className="text-primary-600">notre priorité.</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Le CSPS Élan d'Espoir vous offre une prise en charge médicale complète, 
            humaine et accessible. Au cœur de To, nos agents s'engagent 
            pour votre bien-être au quotidien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#appointment"
              className="group bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 active:scale-95"
            >
              Prendre rendez-vous
              <Calendar size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
            >
              <Phone size={20} className="text-primary-600" />
              Nous contacter
            </a>
          </div>
          {/*  
          <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                  <img 
                    src={`https://i.pravatar.cc/150?u=medical${i}`} 
                    alt="Staff" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-2xl font-bold text-slate-900">25+</p>
              <p className="text-sm text-slate-500 font-medium">Experts médicaux qualifiés</p>
            </div>
            
          </div>
          */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl skew-y-3 lg:skew-y-0">
            <img 
              src={hero} 
              alt="Medical Staff" 
              className="w-full h-[600px] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Stats Card 
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-secondary-100 text-secondary-600 rounded-xl">
                <Users size={24} />
              </div>
              <p className="font-bold text-slate-900">Satisfaction</p>
            </div>
            <p className="text-3xl font-black text-secondary-600 mb-1">98%</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              De nos patients recommandent nos soins de proximité.
            </p>
          </motion.div>
          */}
          
          {/* Decorative dots */}
          <div className="absolute -top-10 -right-10 grid grid-cols-6 gap-2 opacity-20 -z-10">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary-600 rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
