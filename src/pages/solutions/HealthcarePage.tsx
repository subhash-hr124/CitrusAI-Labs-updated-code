import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Activity, Shield, Database, ArrowRight } from 'lucide-react';
import { Page } from '../../types';
import { LogoBackground } from '../../components/LogoBackground';

interface SolutionPageProps {
  setCurrentPage: (p: Page) => void;
}

export const HealthcareSolutionPage = ({ setCurrentPage }: SolutionPageProps) => {
  return (
    <div className="min-h-screen bg-deep-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setCurrentPage('solutions')}
          className="flex items-center gap-2 text-[10px] font-bold text-accent-premier uppercase tracking-widest mb-16 hover:gap-4 transition-all"
        >
          <ArrowRight size={14} className="rotate-180" /> Back to Solutions
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-accent-premier/10 rounded-3xl flex items-center justify-center text-accent-premier mb-10 border border-accent-premier/20 shadow-2xl">
              <Stethoscope size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter lowercase">
              Precision Intelligence for Healthcare
            </h1>
            <p className="text-xl text-[var(--text-body)] leading-relaxed mb-12 max-w-xl font-light">
              Transforming patient outcomes and operational efficiency through secure, AI-native platforms built for the high-stakes medical landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-accent-premier text-black px-10 h-16 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Request Case Study
              </button>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-square bg-[var(--dark-blue)] rounded-[4rem] border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-premier/10 via-transparent to-transparent opacity-50" />
                <div className="p-12 h-full flex flex-col justify-center space-y-8">
                   {[
                     { title: "Clinical Support", desc: "Augment diagnostic accuracy with neural insights." },
                     { title: "Data Security", desc: "HIPAA-compliant zero-trust architecture." },
                     { title: "Patient Flow", desc: "Predictive modeling for staffing and resources." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-accent-premier/30 transition-all">
                        <div className="w-12 h-12 bg-accent-premier/10 rounded-2xl flex items-center justify-center text-accent-premier">
                           <Activity size={24} />
                        </div>
                        <div>
                           <div className="font-bold text-white text-lg">{item.title}</div>
                           <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Interoperability", icon: <Database />, desc: "Connect legacy EMR systems with modern AI pipelines effortlessly." },
             { title: "Compliance", icon: <Shield />, desc: "Automated auditing and verification for medical regulatory standards." },
             { title: "Research Sync", icon: <Activity />, desc: "Directly bridges clinical findings with R&D intelligence loops." }
           ].map((card, i) => (
             <div key={i} className="p-12 bg-[var(--dark-blue)] rounded-[2.5rem] border border-white/5 hover:border-accent-premier transition-all group">
                <div className="text-accent-premier mb-10 group-hover:scale-110 transition-transform origin-left">{card.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 leading-tight">{card.title}</h3>
                <p className="text-[var(--text-body)] text-sm opacity-60 leading-relaxed">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
