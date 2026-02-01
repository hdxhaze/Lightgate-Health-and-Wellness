
import React from 'react';
import { UserCheck, Stethoscope, Heart, BarChart3, Repeat, Sparkles, ArrowRight, ShieldCheck, Microscope, BrainCircuit, Activity, Globe } from 'lucide-react';

interface ValuePropositionProps {
  onCTAClick: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onCTAClick }) => {
  const cards = [
    {
      icon: <UserCheck />,
      title: "Biological Profiling",
      desc: "Deep-dive metabolic analysis to pinpoint exactly how your body converts energy.",
      color: "from-teal-400 to-teal-600",
      accent: "teal",
      tag: "PHASE 1"
    },
    {
      icon: <Microscope />,
      title: "Clinical Blueprint",
      desc: "Medical-grade formulation of your personalized nutrition and activity roadmap.",
      color: "from-lime-400 to-lime-600",
      accent: "lime",
      tag: "PHASE 2"
    },
    {
      icon: <BrainCircuit />,
      title: "Habit Engineering",
      desc: "Psychological systems that make healthy choices your new default state.",
      color: "from-indigo-400 to-indigo-600",
      accent: "indigo",
      tag: "PHASE 3"
    },
    {
      icon: <BarChart3 />,
      title: "Live Monitoring",
      desc: "Continuous loop of biometrics data reviewed daily by our medical team.",
      color: "from-rose-400 to-rose-600",
      accent: "rose",
      tag: "LIVE"
    },
    {
      icon: <Globe />,
      title: "Anywhere Access",
      desc: "World-class endocrinology expertise, accessible 24/7 from your smart device.",
      color: "from-blue-400 to-blue-600",
      accent: "blue",
      tag: "GLOBAL"
    },
    {
      icon: <Activity />,
      title: "Sustained Vitality",
      desc: "Beyond weight loss—engineering a level of health you haven't felt in decades.",
      color: "from-orange-400 to-orange-600",
      accent: "orange",
      tag: "FUTURE"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24 lg:py-40 relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-400/10 blur-[150px] rounded-full -translate-y-1/2 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto text-center mb-24 lg:mb-32 relative z-10 px-4">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-10 shadow-sm">
           The Lightgate Ecosystem
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-950 mb-10 leading-[0.85] tracking-tighter">
          Clinical results <br/><span className="text-teal-600 italic">without</span> the clinic.
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
          We combined board-certified medical expertise with high-performance tracking to build the ultimate weight loss framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="group relative p-12 lg:p-14 rounded-[4rem] bg-white border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] hover:shadow-[0_60px_120px_-30px_rgba(20,184,166,0.15)] transition-all duration-700 overflow-hidden cursor-default perspective-1000"
          >
            {/* Tag Overlay */}
            <div className="absolute top-12 right-12 text-[10px] font-black text-slate-300 group-hover:text-teal-500 transition-colors uppercase tracking-[0.3em]">
               {card.tag}
            </div>

            {/* Subtle Gradient Glow */}
            <div className={`absolute -right-24 -top-24 w-64 h-64 bg-gradient-to-br ${card.color} opacity-[0.02] group-hover:opacity-[0.12] rounded-full blur-[60px] transition-all duration-1000 group-hover:scale-150`}></div>
            
            <div className={`w-24 h-24 bg-gradient-to-br ${card.color} rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-2xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-slate-200 relative`}>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-[2rem]"></div>
              {React.cloneElement(card.icon as React.ReactElement<any>, { size: 42, strokeWidth: 2.5 })}
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-slate-950 mb-6 group-hover:text-teal-600 transition-colors leading-tight">{card.title}</h3>
            <p className="text-slate-500 leading-relaxed font-light text-xl lg:text-2xl">{card.desc}</p>
            
            <div className="mt-10 pt-10 border-t border-slate-50 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-teal-600">
               Explore {card.accent} tech <ArrowRight size={18} />
            </div>
          </div>
        ))}
      </div>

      {/* High-Impact Image Break Section */}
      <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-950 rounded-[4rem] p-8 lg:p-16 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Built for the <br/><span className="text-lime-400">top 1%</span> of health seekers.
          </h3>
          <p className="text-xl text-slate-400 font-light mb-12 max-w-xl leading-relaxed">
            Lightgate is for those who are tired of guessing. We provide the data, the medicine, and the coaching to ensure your success is inevitable.
          </p>
          <button 
            onClick={onCTAClick}
            className="px-10 py-5 bg-white text-[#020617] rounded-2xl font-black text-xl hover:bg-teal-400 transition-all active:scale-95 shadow-xl shadow-teal-500/20"
          >
            See Our Science
          </button>
        </div>
        <div className="relative group perspective-1000">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
            className="w-full aspect-video lg:aspect-square object-cover rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105 border-4 border-white/5"
            alt="Scientific Excellence"
          />
          <div className="absolute -bottom-10 -left-10 glass-card-vibrant p-8 rounded-[2rem] border-lime-400/30 group-hover:scale-110 transition-transform hidden md:block">
            <div className="text-5xl font-black text-white mb-1 tracking-tighter">98.4%</div>
            <div className="text-[10px] text-lime-400 font-black uppercase tracking-[0.3em]">Habit Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};
