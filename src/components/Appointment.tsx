import React from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Clock, ChevronRight, ChevronLeft, CheckCircle2, Send, Loader2 } from 'lucide-react';

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const timeSlots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export const Appointment = () => {
  const [selectedDay, setSelectedDay] = React.useState(2);
  const [selectedTime, setSelectedTime] = React.useState('10:00');
  const [step, setStep] = React.useState(1);
  const [prenom, setPrenom] = React.useState('');
  const [nom, setNom] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getSelectedDate = () => {
    const date = new Date(today);
    date.setDate(date.getDate() + selectedDay);
    return date;
  };

  const getDateLabel = () => {
    const selectedDate = getSelectedDate();
    const dayName = days[selectedDate.getDay()];
    const dayNum = selectedDate.getDate();
    const monthName = months[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    return `${dayName} ${dayNum} ${monthName} ${year}`;
  };

  const isDateValid = () => {
    const selectedDate = getSelectedDate();
    return selectedDate > today;
  };

  const handleSubmit = async () => {
    if (!prenom || !nom || !telephone) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (!isDateValid()) {
      setError('Veuillez sélectionner une date future.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          prenom,
          nom,
          telephone,
          date: getDateLabel(),
          heure: selectedTime,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
      setSuccess(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary-500 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Prendre un rendez-vous
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Évitez les files d'attente, <br />
              <span className="text-primary-400">réservez en ligne.</span>
            </motion.h2>
            <ul className="space-y-6 mb-12">
              {[
                "Demande envoyée instantanément",
                "Le centre vous confirme sous 24h",
                "Choix du créneau de votre choix",
                "Rappel automatique avant votre visite"
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-slate-300 text-lg"
                >
                  <CheckCircle2 className="text-secondary-500" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-primary-900/50"
          >
            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
                <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demande envoyée !</h3>
                <p className="text-slate-500 max-w-xs leading-relaxed">
                  Votre demande a bien été reçue. Le centre vous contactera sous 24h pour confirmer votre rendez-vous.
                </p>
                <button
                  onClick={() => { setSuccess(false); setStep(1); setPrenom(''); setNom(''); setTelephone(''); }}
                  className="text-primary-600 font-bold underline text-sm"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Demande de RDV</h3>
                  <div className="flex gap-2">
                    <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary-600' : 'bg-slate-200'}`} />
                    <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary-600' : 'bg-slate-200'}`} />
                  </div>
                </div>

                {step === 1 ? (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-bold text-slate-800">{months[new Date(today.getTime() + selectedDay * 24 * 60 * 60 * 1000).getMonth()]} {new Date(today.getTime() + selectedDay * 24 * 60 * 60 * 1000).getFullYear()}</p>
                        <div className="flex gap-2 text-slate-400">
                          <ChevronLeft size={20} className="cursor-pointer hover:text-slate-600" />
                          <ChevronRight size={20} className="cursor-pointer hover:text-slate-600" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {days.map(d => (
                          <div key={d} className="text-[10px] uppercase font-bold text-slate-400 text-center mb-2">{d}</div>
                        ))}
                        {Array.from({ length: 14 }).map((_, i) => {
                          const futureDate = new Date(today);
                          futureDate.setDate(futureDate.getDate() + i);
                          const dayNum = futureDate.getDate();
                          const isSelected = selectedDay === i;
                          const isDisabled = futureDate <= today;
                          return (
                            <div
                              key={i}
                              onClick={() => !isDisabled && setSelectedDay(i)}
                              className={`aspect-square flex items-center justify-center rounded-2xl cursor-pointer transition-all ${
                                isDisabled
                                  ? 'bg-slate-100 text-slate-300 cursor-not-allowed opacity-40'
                                  : isSelected
                                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span className="font-bold text-sm">{dayNum}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Clock size={18} className="text-primary-600" />
                        Horaires disponibles
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map(time => (
                          <div
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 text-center rounded-xl font-bold text-sm cursor-pointer transition-all border ${
                              selectedTime === time
                                ? 'bg-primary-50 border-primary-600 text-primary-600'
                                : 'border-slate-100 text-slate-500 hover:border-slate-200'
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary-600/20 active:scale-[0.98] transition-transform"
                    >
                      Continuer
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prénom</label>
                        <input
                          type="text"
                          value={prenom}
                          onChange={e => setPrenom(e.target.value)}
                          placeholder="Abdoulaye"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nom</label>
                        <input
                          type="text"
                          value={nom}
                          onChange={e => setNom(e.target.value)}
                          placeholder="Zongo"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Téléphone</label>
                      <input
                        type="tel"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                        placeholder="+226 XX XX XX XX"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    <div className="p-4 bg-primary-50 rounded-2xl border border-primary-100">
                      <p className="text-xs font-bold text-primary-900 uppercase mb-2">Récapitulatif</p>
                      <p className="text-primary-700 font-medium">{getDateLabel()} @ {selectedTime}</p>
                      <p className="text-xs text-primary-600 mt-1 italic">Consultation Générale</p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-2xl font-bold"
                      >
                        Retour
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-[2] bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Envoi...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Demander un RDV
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};