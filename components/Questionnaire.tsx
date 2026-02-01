
import React, { useState } from 'react';
import { Send, Lock, ArrowRight, User, Weight, Target, Calendar, Check, Mail, Phone, ChevronRight, Activity, Zap } from 'lucide-react';

interface QuestionnaireProps {
  id?: string;
  onComplete: () => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({ id, onComplete }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    currentWeight: '',
    goalWeight: '',
    timeframe: '12-weeks'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id={id} className="container mx-auto px-6 py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto bg-[#020617] p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] border-2 border-teal-500/30 text-white shadow-2xl animate-in fade-in zoom-in duration-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="w-20 h-20 md:w-28 md:h-28 bg-lime-400 text-[#020617] rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-lime-400/20">
            <Check size={48} strokeWidth={5} className="md:w-16 md:h-16" />
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase">Preview Ready.</h2>
          <p className="text-lg md:text-2xl text-slate-400 mb-10 leading-relaxed font-light">
            We've calculated your success roadmap. Schedule your briefing to unlock the clinical forecast.
          </p>
          <button 
            onClick={onComplete}
            className="w-full px-8 py-6 md:py-8 bg-teal-500 text-slate-950 rounded-[2rem] font-black hover:bg-lime-400 transition-all text-xl md:text-2xl shadow-xl flex items-center justify-center gap-4 group"
          >
            Claim My Results <ChevronRight size={32} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="container mx-auto px-6 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto bg-white rounded-[3.5rem] md:rounded-[4.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[38%] bg-[#020617] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Medical Analysis" />
            <div className="absolute inset-0 bg-[#020617]/80"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              CLINICAL FORECAST 2.0
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-[1] tracking-tighter">Your <span className="text-lime-400 italic">Roadmap</span>.</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-10">
              Input your current metrics to generate a medically-backed forecast of your transformation.
            </p>

            <div className="space-y-4">
              <StatLabel label="Prediction Accuracy" value="99.2%" />
              <StatLabel label="Security Standard" value="HIPAA-Safe" />
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-500">
               <Lock size={20} />
             </div>
             <div className="text-[9px] text-slate-500 font-medium leading-tight">Your health data is protected by industry-standard encryption and privacy laws.</div>
          </div>
        </div>

        {/* Form Body */}
        <div className="w-full lg:w-[62%] p-8 md:p-16 lg:p-20 bg-slate-50/50">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <InputGroup 
                label="Full Name" 
                placeholder="Jane Doe" 
                icon={<User size={18}/>} 
                value={formData.name} 
                onChange={(v) => setFormData({...formData, name: v})} 
              />
              
              <InputGroup 
                label="Safe Email" 
                placeholder="email@example.com" 
                icon={<Mail size={18}/>} 
                type="email"
                value={formData.email} 
                onChange={(v) => setFormData({...formData, email: v})} 
              />

              <InputGroup 
                label="Current Weight (lbs)" 
                placeholder="180" 
                icon={<Weight size={18}/>} 
                type="number"
                value={formData.currentWeight} 
                onChange={(v) => setFormData({...formData, currentWeight: v})} 
              />

              <InputGroup 
                label="Target Weight (lbs)" 
                placeholder="150" 
                icon={<Target size={18}/>} 
                type="number"
                value={formData.goalWeight} 
                onChange={(v) => setFormData({...formData, goalWeight: v})} 
              />

              <div className="col-span-full space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} className="text-teal-600"/> Preferred Timeframe
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['8-weeks', '12-weeks', '24-weeks', 'custom'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({...formData, timeframe: opt})}
                      className={`py-4 px-2 rounded-xl text-[9px] font-black border-2 transition-all shadow-sm ${
                        formData.timeframe === opt 
                        ? 'bg-teal-500 border-teal-500 text-white' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-teal-200'
                      }`}
                    >
                      {opt.replace('-', ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="w-full py-6 bg-[#020617] text-white rounded-[2rem] font-black text-xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4 group"
              >
                Generate Clinical Preview
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-center text-[9px] text-slate-400 mt-6 font-bold uppercase tracking-[0.2em] italic">
                No Judgment. Pure Science.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const StatLabel: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{label}</span>
    <span className="text-white font-black text-sm tracking-tight">{value}</span>
  </div>
);

const InputGroup: React.FC<{ label: string, placeholder: string, icon: React.ReactNode, type?: string, value: string, onChange: (v: string) => void }> = ({ label, placeholder, icon, type = "text", value, onChange }) => (
  <div className="space-y-3 group">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 group-focus-within:text-teal-600 transition-colors">
      <span className="text-teal-600">{icon}</span> {label}
    </label>
    <div className="relative">
      <input 
        required 
        type={type} 
        placeholder={placeholder}
        className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-teal-500 outline-none transition-all text-xl font-bold placeholder:text-slate-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);
