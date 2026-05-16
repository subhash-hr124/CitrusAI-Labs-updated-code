import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, Brain, ArrowRight } from 'lucide-react';
import { Page } from '../../types';
import { LogoBackground } from '../../components/LogoBackground';

interface SolutionPageProps {
  setCurrentPage: (p: Page) => void;
}

export const EducationSolutionPage = ({ setCurrentPage }: SolutionPageProps) => {
  return (
    <div className="min-h-screen bg-deep-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setCurrentPage('solutions')}
          className="flex items-center gap-2 text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-16 hover:gap-4 transition-all"
        >
          <ArrowRight size={14} className="rotate-180" /> Back to Solutions
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-electric-blue/10 rounded-3xl flex items-center justify-center text-electric-blue mb-10 border border-electric-blue/20 shadow-2xl">
              <GraduationCap size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter lowercase">
              The Future of Autonomous Learning
            </h1>
            <p className="text-xl text-[var(--text-body)] leading-relaxed mb-12 max-w-xl font-light">
              Empowering students and institutions with agentic AI companions that adapt to individual cognitive styles and automate administrative friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-electric-blue text-black px-10 h-16 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Download Whitepaper
              </button>
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-square bg-[var(--dark-blue)] rounded-[4rem] border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-transparent opacity-50" />
                <div className="p-12 h-full flex flex-col justify-center space-y-8">
                   {[
                     { title: "Personalized Paths", desc: "Curriculum that evolves in real-time with student progress." },
                     { title: "Voice Interaction", desc: "Expressive AI narrators for immersive storytelling." },
                     { title: "Safe Moderation", desc: "Multi-layer safety filters for younger learners." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-electric-blue/30 transition-all">
                        <div className="w-12 h-12 bg-electric-blue/10 rounded-2xl flex items-center justify-center text-electric-blue">
                           <Brain size={24} />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "LLM Tutoring", icon: <BookOpen />, desc: "24/7 access to experts in every subject, grounded in verified facts." },
             { title: "Campus Analytics", icon: <Users />, desc: "Insights into student engagement and identifying at-risk learners early." },
             { title: "Gamified Mastery", icon: <Brain />, desc: "Applying game theory to education for 2x retention rates." }
           ].map((card, i) => (
             <div key={i} className="p-12 bg-[var(--dark-blue)] rounded-[2.5rem] border border-white/5 hover:border-electric-blue transition-all group">
                <div className="text-electric-blue mb-10 group-hover:scale-110 transition-transform origin-left">{card.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 leading-tight">{card.title}</h3>
                <p className="text-[var(--text-body)] text-sm opacity-60 leading-relaxed">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
