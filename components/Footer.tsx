
import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">Lightgate</span>
            </div>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed mb-8">
              A premium, medically-guided weight loss ecosystem. Our mission is to provide sustainable health solutions that actually last, led by licensed medical professionals.
            </p>
            <div className="flex gap-4">
               <ContactLink icon={<Mail size={18}/>} text="support@lightgatewellness.com" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Program</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#" className="hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Medical Team</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Medical Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Lightgate Health and Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
             <span>Medically Led</span>
             <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
             <span>Science Backed</span>
             <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
             <span>Online Consults</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors cursor-pointer group">
    <span className="text-slate-500 group-hover:text-teal-400 transition-colors">{icon}</span>
    <span className="text-sm font-light">{text}</span>
  </div>
);
