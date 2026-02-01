
import React from 'react';
import { Calendar, Video, Clock, CheckCircle, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

interface BookingCTAProps {
  id?: string;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ id }) => {
  return (
    <section id={id} className="container mx-auto px-6 py-20 lg:py-40">
      <div className="max-w-7xl mx-auto bg-[#020617] rounded-[5rem] lg:rounded-[8rem] p-12 md:p-32 relative overflow-hidden flex flex-col items-center text-center shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)] group">
        
        {/* Deep Dynamic Background Layering */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-[20s]" 
            alt="Doctor Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617] pointer-events-none"></div>
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-teal-500/15 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-lime-400/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-lime-400 text-xs font-black uppercase tracking-[0.5em] mb-12 shadow-inner backdrop-blur-xl">
            <Zap size={16} fill="currentColor" />
            FINAL STEP TO PEAK
          </div>
          
          <h2 className="text-5xl md:text-8xl lg:text-[140px] font-black text-white mb-12 leading-[0.8] tracking-tighter">
            Your <span className="text-lime-400 italic">last</span> <br/>
            first step.
          </h2>
          
          <p className="text-xl md:text-3xl lg:text-4xl text-slate-400 font-light mb-20 max-w-4xl mx-auto leading-tight">
            End the cycle of temporary fixes. Secure your 15-minute clinical intro and unlock the science of <span className="text-white font-bold underline decoration-teal-500 decoration-4 underline-offset-8">permanent</span> health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20 w-full">
             <StepItem icon={<Clock size={32}/>} text="15-Minute Briefing" sub="Fast, precise, efficient" />
             <StepItem icon={<Video size={32}/>} text="Video Interface" sub="Secure Nationwide Cloud" />
             <StepItem icon={<ShieldCheck size={32}/>} text="No Commitment" sub="Pure Clinical Clarity" />
          </div>

          <div className="relative inline-block group/btn w-full sm:w-auto">
             <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-lime-400 rounded-[4rem] opacity-30 blur-2xl group-hover/btn:opacity-60 transition-opacity"></div>
             <button className="relative w-full sm:w-auto px-20 py-10 bg-teal-500 hover:bg-lime-400 text-slate-950 rounded-[3.5rem] text-2xl lg:text-4xl font-black transition-all shadow-[0_40px_80px_-20px_rgba(20,184,166,0.5)] active:scale-95 flex items-center justify-center gap-6 overflow-hidden">
                <span className="relative z-10">BOOK FREE CONSULT</span>
                <ArrowRight size={48} className="relative z-10 group-hover/btn:translate-x-4 transition-transform" />
                <div className="absolute inset-0 bg-white/40 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
             </button>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                 {[8,9,10].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} className="w-10 h-10 rounded-full border-2 border-[#020617] ring-1 ring-white/10" alt="Client"/>)}
              </div>
              <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Joining 24 booked today</span>
            </div>
            <div className="h-px w-12 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3 text-slate-400">
               <Star size={20} fill="#84cc16" className="text-lime-500" />
               <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Top Rated Medical Program 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem: React.FC<{ icon: React.ReactNode, text: string, sub: string }> = ({ icon, text, sub }) => (
  <div className="flex flex-col items-center gap-5 group/step cursor-default">
    <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-teal-400 border-2 border-white/10 group-hover/step:bg-teal-500 group-hover/step:text-slate-950 group-hover/step:scale-110 transition-all duration-500 shadow-2xl">
      {icon}
    </div>
    <div className="space-y-1">
      <div className="text-white font-black text-xl lg:text-2xl tracking-tight group-hover/step:text-lime-400 transition-colors">{text}</div>
      <div className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">{sub}</div>
    </div>
  </div>
);
