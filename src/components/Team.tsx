import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import chef from './public/images/boss.jpg';
import major from './public/images/major.jfif';
import membre1 from './public/images/membr1.jfif';
import membre2 from './public/images/membr2.webp';
import { MutableRefObject } from 'react';

const team = [
  {
    name: "Mme Ouédraogo Nathalie",
    role: "Infirmière Diplômée d'État & Fondateur",
    image: chef,
    specialty: "Soins Généraux"
  },
  {
    name: "Mme Aminata Sanou",
    role: "Infirmière",
    image: membre1,
    specialty: "Soins Généraux"
    
  },
  {
    name: "M. Jean-Baptiste Sawadogo",
    role: "Infirmier Major",
    image: major,
    specialty: "Soins d'Urgence"
  },
  {
    name: "Mme Sophie Konaté",
    role: "Infirmière",
    image: membre2,
    specialty: "Soins Pédiatriques"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Notre Équipe Médicale
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-6"
          >
            Des agents dévoués à <br /> votre bien-être.
          </motion.h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] mb-6 aspect-[4/5] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-secondary-600 font-bold text-sm mb-2 uppercase tracking-wide">{member.specialty}</p>
              <p className="text-slate-500 font-medium text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
