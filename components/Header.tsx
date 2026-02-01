
import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

interface HeaderProps {
  hasScrolled: boolean;
  onCTAClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ hasScrolled, onCTAClick }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        hasScrolled ? 'bg-[#020617]/80 backdrop-blur-3xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-slate-950 shadow-lg group-hover:rotate-12 transition-transform duration-500 relative overflow-hidden">
            <ShieldCheck size={28} strokeWidth={2.5} />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-2xl tracking-tighter text-white">LIGHTGATE</span>
            <span className="text-[10px] font-black tracking-[0.4em] text-teal-500 uppercase flex items-center gap-1">
              HEALTH <Activity size={8} /> SYSTEMS
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-12 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Method</a>
          <a href="#" className="hover:text-white transition-colors">Clinics</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onCTAClick}
            className="group relative px-8 py-3.5 bg-white text-slate-950 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl hover:bg-teal-400 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Briefing
              <Activity size={14} className="group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
