
import React, { useRef, useEffect } from 'react';
import { ArrowRight, Star, Activity, TrendingDown, Clock, Shield, HeartPulse, Zap, CheckCircle2, Award } from 'lucide-react';

interface HeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryClick, onSecondaryClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveX = (clientX - innerWidth / 2) / 60;
      const moveY = (clientY - innerHeight / 2) / 60;
      containerRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#020617]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-teal-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-[10px] md:text-xs font-black mb-6">
              <span className="flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,1)]"></span>
              CLINICALLY SUPERVISED CARE
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-[110px] font-black text-white leading-[1.1] md:leading-[0.9] mb-8 lg:mb-12 tracking-tighter">
              Lose up to <br/>
              <span className="text-gradient-lime">20 lbs</span> <br className="hidden md:block" />
              <span className="text-3xl md:text-5xl lg:text-6xl font-extralight text-slate-500">in 12 weeks.</span>
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-slate-400 mb-10 lg:mb-16 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Medical-grade weight loss engineered for your unique metabolism. All online, all personalized, all built to last.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 lg:mb-20">
              <button 
                onClick={onPrimaryClick}
                className="w-full sm:w-auto px-10 py-5 bg-teal-500 hover:bg-lime-400 text-slate-950 rounded-[2rem] text-lg lg:text-xl font-black transition-all shadow-xl active:scale-95 group flex items-center justify-center gap-3"
              >
                Start My Journey
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={onSecondaryClick}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] text-lg font-bold transition-all active:scale-95 backdrop-blur-3xl"
              >
                See the Method
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-10 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[33, 44, 55].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} className="w-10 h-10 rounded-full border-2 border-[#020617] ring-1 ring-teal-500/30 shadow-lg" alt="Client" />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-lime-400 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px]">1,500+ RESULTS GENERATED</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative order-1 lg:order-2 px-4" ref={containerRef}>
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                alt="Health Journey" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Success Widget - Cleaned up for mobile, no overlapping clutter */}
            <div className="absolute -left-2 md:-left-16 bottom-10 md:bottom-20 animate-float glass-card-vibrant p-4 md:p-7 rounded-[2rem] md:rounded-[3rem] z-20 border-teal-500/40 min-w-[150px] md:min-w-[260px] shadow-2xl">
              <div className="flex items-center gap-3 md:gap-5 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-500/20 rounded-xl md:rounded-2xl flex items-center justify-center text-teal-400">
                  <TrendingDown size={20} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest">Weight Log</div>
                  <div className="text-lg md:text-3xl font-black text-white">-19.2 lbs</div>
                </div>
              </div>
              <div className="h-1 md:h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-500 to-lime-400 w-[88%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
              </div>
            </div>

            {/* Extra High-Visibility Desktop Only Widgets */}
            <div className="hidden lg:block absolute -right-12 top-20 animate-float glass-card-vibrant p-7 rounded-[3rem] z-20 border-lime-500/50 min-w-[220px] shadow-2xl" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-lime-500/20 rounded-2xl flex items-center justify-center text-lime-400">
                  <HeartPulse size={28} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Heart Health</div>
                  <div className="text-2xl font-black text-white">58 BPM</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-lime-400/10 rounded-lg text-lime-400 text-[10px] font-black uppercase tracking-widest border border-lime-400/20">
                 <CheckCircle2 size={12} />
                 <span>Clinically Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
