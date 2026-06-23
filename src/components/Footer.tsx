import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-primary-900 block leading-none">{CLINIC_INFO.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary-600">{CLINIC_INFO.type}</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Votre santé est un cadeau précieux que nous nous engageons à protéger. 
              Des soins de qualité, accessibles et humains au cœur de To.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services Populaires</h4>
            <ul className="space-y-4">
              {["Consultation Générale", "Soins de Maternité", "Urgences 24h/24", "Vaccinations"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Coordonnées</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                <span>Secteur 3, To, <br />Burkina Faso</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-600 flex-shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-600 flex-shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Heures d'Ouverture</h4>
            <div className="space-y-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 text-secondary-600">
                <Clock size={20} />
                <span className="font-bold text-sm uppercase tracking-wide">Ouvert en continu</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Notre service d'urgence et notre garde sont disponibles <strong>24h/24, 7j/7</strong>.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">STATUS ACTUEL</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-secondary-600">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full animate-pulse" />
                  OUVERT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} CSPS Élan d'Espoir. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-600 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
