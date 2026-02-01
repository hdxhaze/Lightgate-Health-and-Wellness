
import React from 'react';
import { Star, ShieldCheck, Check } from 'lucide-react';

interface ProofSectionProps {
  onCTAClick: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onCTAClick }) => {
  const testimonials = [
    {
      name: "Jessica Miller",
      role: "Down 22 lbs",
      text: "The medical oversight gave me the confidence I never had with other plans. It felt safe, structured, and most importantly—it worked.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Chen",
      role: "Life transformed",
      text: "I finally understand how my body responds to food. The data-driven approach stopped the guessing game and started the results.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute -right-20 top-0 w-96 h-96 bg-lime-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-lime-400 rounded-3xl -rotate-12 z-0"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Healthy Lifestyle" 
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 animate-float">
                <div className="text-4xl font-black text-slate-900 mb-1">94%</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Success Rate</div>
                <div className="flex gap-1 mt-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#84cc16" className="text-lime-500" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Clinically proven <br/><span className="text-teal-600">transformations</span>.
            </h2>
            <p className="text-xl text-slate-500 font-light mb-12 leading-relaxed">
              We leverage the latest in metabolic research to provide a program that is as safe as it is effective. Our clients don't just lose weight—they gain health.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Check size={14} strokeWidth={4} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dr-Led Consultations</h4>
                  <p className="text-slate-500 font-light">Direct access to medical expertise for your safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Check size={14} strokeWidth={4} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Personalized Metabolic Testing</h4>
                  <p className="text-slate-500 font-light">We identify exactly how your body processes energy.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-teal-600 text-[10px] font-black uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm italic font-light leading-relaxed">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
