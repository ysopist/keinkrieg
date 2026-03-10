import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Users, PenTool, CheckCircle2, Phone, X, AlertTriangle, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [signed, setSigned] = useState(false);
  const [showSignForm, setShowSignForm] = useState(false);
  const [step, setStep] = useState<'info' | 'phone' | 'code'>('info');
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', code: '' });
  const [signatoriesCount, setSignatoriesCount] = useState(1428);
  const [error, setError] = useState('');

  useEffect(() => {
    const hasSigned = localStorage.getItem('collective_no_signed');
    if (hasSigned) {
      setSigned(true);
    }
  }, []);

  const handleStartSigning = () => {
    if (signed) return;
    setShowSignForm(true);
    setStep('info');
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.city) return;
    setStep('phone');
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    // Simulate sending SMS
    setStep('code');
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.code === '1234' || formData.code.length === 4) { // Mock verification
      setSigned(true);
      localStorage.setItem('collective_no_signed', 'true');
      setSignatoriesCount(prev => prev + 1);
      setShowSignForm(false);
    } else {
      setError('Ungültiger Code. Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e5e5e5] font-sans selection:bg-orange-600 selection:text-white">
      {/* Dynamic News Ticker */}
      <div className="bg-orange-600 overflow-hidden py-2 whitespace-nowrap border-b border-orange-700">
        <div className="animate-marquee inline-block">
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Es ist Krieg, aber keiner kommt vorbei • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Wille des Nicht • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Kollektive Verweigerung • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Das Leben wählen • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Stoppt die Logik der Verteidigung • </span>
        </div>
        <div className="absolute top-0 animate-marquee2 inline-block py-2">
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Es ist Krieg, aber keiner kommt vorbei • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Wille des Nicht • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Kollektive Verweigerung • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Das Leben wählen • </span>
          <span className="mx-4 font-bold text-black uppercase tracking-tighter">Stoppt die Logik der Verteidigung • </span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="px-6 py-24 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-6 border border-orange-600 text-orange-600 text-xs font-bold uppercase tracking-[0.2em]">
            Ein dringender Aufruf
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
            DAS KOLLEKTIVE <span className="text-orange-600">NEIN</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
            Stell dir vor, es ist Krieg und keiner geht hin. Die Entscheidung über das Töten liegt nicht beim Staat, sondern im Gewissen des Einzelnen.
          </p>
        </motion.div>
      </header>

      {/* Stats */}
      <section className="bg-stone-900/50 py-12 border-y border-stone-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Users className="text-orange-600 w-10 h-10" />
            <div>
              <p className="text-3xl font-bold">{signatoriesCount.toLocaleString()}</p>
              <p className="text-stone-500 text-sm uppercase font-semibold">Aktive Verweigerer</p>
            </div>
          </div>
          <div className="h-px w-full md:w-px md:h-12 bg-stone-800"></div>
          <div className="text-center md:text-left">
            <p className="text-stone-300 italic">"Ich wähle das Leben. Unabhängig von jedem Befehl."</p>
          </div>
          <button 
            onClick={handleStartSigning}
            disabled={signed}
            className={`px-8 py-4 font-bold uppercase tracking-widest transition-all ${signed ? 'bg-green-600 text-white cursor-default' : 'bg-orange-600 text-black hover:bg-orange-500 active:scale-95'}`}
          >
            {signed ? 'Zusage Bestätigt' : 'Zusage Signieren'}
          </button>
        </div>
      </section>

      {/* Manifest */}
      <main className="max-w-3xl mx-auto px-6 py-24 space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <ShieldAlert className="text-orange-600" /> DAS MANIFEST
          </h2>
          <div className="space-y-6 text-lg text-stone-300 leading-relaxed font-serif">
            <p>
              Wir erkennen an: Die Fähigkeit zur Verteidigung ist die strukturelle Voraussetzung für den Angriff. Ohne die Bereitschaft des Einzelnen, im Namen der Verteidigung zu töten, bricht das System der Aggression in sich zusammen.
            </p>
            <p className="border-l-4 border-orange-600 pl-6 italic text-white text-xl">
              "Verteidigung ist der Schatten des Angriffs. Wer das Schwert zur Verteidigung hebt, gibt dem Gegner das Recht, es ebenfalls zu tun."
            </p>
            <p>
              Der Mensch will die Entscheidung über Leben und Tod nicht treffen. Wenn er es dennoch tut, geschieht dies meist unter dem Zwang einer Ideologie oder eines Befehls. Wir erklären hiermit unsere Unabhängigkeit von diesem Zwang. Unsere Entscheidung gegen die Waffe ist souverän und steht über jedem staatlichen Gesetz.
            </p>
            <p>
              Die Gemeinschaft will das Töten nicht. Wir haben das Recht, nicht teilzunehmen. Wir haben die Pflicht, abwesend zu sein, wenn die Zerstörung beginnt. Das "Nein" ist kein Akt der Feigheit, sondern der höchste Ausdruck menschlichen Willens: Der Wille des Nicht.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-stone-900 border border-stone-800 hover:border-orange-600/50 transition-colors">
            <h3 className="text-orange-600 font-bold mb-4 uppercase tracking-tighter">Souveränität</h3>
            <p className="text-stone-400 text-sm">Keine Regierung hat das Recht, über das Gewissen des Einzelnen zu verfügen. Die Entscheidung, nicht zu töten, ist unantastbar.</p>
          </div>
          <div className="p-8 bg-stone-900 border border-stone-800 hover:border-orange-600/50 transition-colors">
            <h3 className="text-orange-600 font-bold mb-4 uppercase tracking-tighter">Transnationalität</h3>
            <p className="text-stone-400 text-sm">Unser Nein kennt keine Grenzen. Wir solidarisieren uns mit allen Menschen auf der Gegenseite, die ebenfalls das Nein wählen.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-12 text-center text-stone-600 text-sm">
        <p>© 2024 Wille des Nicht. Kollektives Nein – Für das Leben.</p>
      </footer>

      {/* Signing Modal */}
      <AnimatePresence>
        {showSignForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setShowSignForm(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-stone-900 border border-stone-800 p-8 shadow-2xl"
            >
              <button 
                onClick={() => setShowSignForm(false)}
                className="absolute top-4 right-4 text-stone-500 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="text-black" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Digitale Zusage</h2>
                <p className="text-stone-500 text-sm mt-2">Einmalige Verifizierung per SMS-Code erforderlich</p>
              </div>

              {step === 'info' && (
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Vollständiger Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-orange-600"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Stadt / Herkunft</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-orange-600"
                      placeholder="Berlin"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="w-full bg-orange-600 text-black py-4 font-bold uppercase hover:bg-orange-500 mt-4 flex items-center justify-center gap-2">
                    Weiter <ArrowRight size={18} />
                  </button>
                </form>
              )}

              {step === 'phone' && (
                <form onSubmit={handlePhoneSubmit} className="space-y-4 text-center">
                  <p className="text-stone-300 mb-4">Um die Einmaligkeit Ihrer Stimme zu gewährleisten, benötigen wir eine Handynummer zur Verifizierung.</p>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-stone-800 border border-stone-700 pl-12 pr-4 py-3 focus:outline-none focus:border-orange-600"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="flex items-start gap-3 text-left bg-orange-600/10 p-4 border border-orange-600/20 mt-4">
                    <AlertTriangle className="text-orange-600 shrink-0" size={20} />
                    <p className="text-[10px] text-stone-400 leading-tight">Ihre Nummer wird ausschließlich für diesen Abgleich genutzt und sofort nach Verifizierung durch einen anonymen Hash-Wert ersetzt. Kein Tracking, keine Werbung.</p>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 text-black py-4 font-bold uppercase hover:bg-orange-500 mt-4">
                    SMS-Code anfordern
                  </button>
                </form>
              )}

              {step === 'code' && (
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-stone-300">Code gesendet an: <span className="text-orange-600">{formData.phone}</span></p>
                    <button type="button" onClick={() => setStep('phone')} className="text-xs text-stone-500 underline mt-1">Nummer ändern</button>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Verifizierungscode (4-stellig)</label>
                    <input 
                      required
                      type="text" 
                      maxLength={4}
                      className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-orange-600 text-center text-3xl tracking-[1em] font-bold"
                      placeholder="0000"
                      value={formData.code}
                      onChange={e => setFormData({...formData, code: e.target.value.replace(/\D/g, '')})}
                    />
                  </div>
                  {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                  <p className="text-[10px] text-stone-500 text-center italic">Simulation: Geben Sie einen beliebigen 4-stelligen Code ein.</p>
                  <button type="submit" className="w-full bg-orange-600 text-black py-4 font-bold uppercase hover:bg-orange-500 mt-4">
                    Signatur bestätigen
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Notification */}
      <AnimatePresence>
        {signed && !showSignForm && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-green-600 text-white px-8 py-4 shadow-2xl flex items-center gap-4 border border-green-500"
          >
            <CheckCircle2 size={24} />
            <div>
              <p className="font-bold uppercase tracking-tighter">Zusage erfolgreich erfasst</p>
              <p className="text-xs opacity-80">Danke für Ihren Mut zur Abwesenheit.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;
