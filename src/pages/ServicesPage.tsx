import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Code2, Cpu, Rocket, ArrowRight, CheckCircle2, Zap, Shield, Microscope } from 'lucide-react';
import { Page } from '../types';

interface ServicesPageProps {
  setCurrentPage: (p: Page) => void;
}

export const ServicesPage = ({ setCurrentPage }: ServicesPageProps) => {
  return (
    <div className="min-h-screen bg-deep-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden border-b border-white/5 min-h-[85vh] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-premier/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_60%_50%,rgba(59,130,246,0.15),rgba(147,51,234,0.1),transparent_70%)] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl py-12 lg:py-24"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-premier/10 border border-accent-premier/20 text-accent-premier text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                <Zap size={14} /> Intelligence as a Service
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.85] tracking-tighter">
                Consulting, <br />
                <span className="text-accent-premier">Not as Usual.</span>
              </h1>
              <p className="text-xl text-[var(--text-body)] leading-relaxed mb-12 max-w-xl font-light">
                Conventional consulting sells hours to solve symptoms. We deploy intelligence to solve foundations. At Citrus AI Labs, we don't just advise; we architect and embed the neural backbone of your next decade.
              </p>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-accent-premier text-black px-10 h-16 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  Inquire about a partnership
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image - Absolute positioned to break out of container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute top-0 right-0 w-[75%] h-full hidden lg:block z-0"
        >
          <div className="relative w-full h-full" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)' }}>
            <img 
              src="/Services.jpg" 
              alt="Services Hero" 
              className="w-full h-full object-cover opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Edge Shadow and Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-dark via-transparent to-transparent pointer-events-none w-1/4" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep-dark to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-deep-dark to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* The Difference Section */}
      <section className="py-32 bg-dark-blue/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 tracking-tight leading-tight">
                Why We Don't Look Like <br />
                the "Big Four".
              </h2>
              <div className="space-y-10">
                {[
                  {
                    title: "Code-First Strategy",
                    desc: "Our consultants are research engineers. We prototype during meetings, not weeks later.",
                    icon: <Code2 className="text-accent-premier" />
                  },
                  {
                    title: "Skin in the Game",
                    desc: "We focus on outcomes. Our success is measured by the delta in your operational efficiency.",
                    icon: <Rocket className="text-accent-premier" />
                  },
                  {
                    title: "Zero Bench Time",
                    desc: "You get our best talent, always. We only take on three major consulting partnerships per quarter.",
                    icon: <CheckCircle2 className="text-accent-premier" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent-premier transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[var(--text-body)] text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] bg-[var(--charcoal)] border border-white/10 overflow-hidden p-12 flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-premier/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform" />
                <div className="text-accent-premier italic text-2xl font-light mb-12">
                  "Citrus Labs didn't just tell us what to do. They sat with our engineering team for 48 hours and refactored our entire data pipeline using agentic workflows. We saw a 30% revenue lift in 10 days."
                </div>
                <div>
                   <div className="text-white font-bold">Marcus Chen</div>
                   <div className="text-[10px] text-accent-premier uppercase tracking-widest">CTO // Global Logistics Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capability Pillars */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <h2 className="text-4xl font-display font-bold text-white mb-6 tracking-tight">Core Methodology</h2>
             <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Specific domains where we deploy our specialized intelligence units.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Architectural Audits",
                icon: <Shield />,
                features: ["Latency Profiling", "Context Window Optimization", "Security Vulnerability RAG Maps"]
              },
              {
                title: "Custom LLM Fine-tuning",
                icon: <Microscope />,
                features: ["Domain-Specific Alignment", "Reinforcement Learning (RLHF)", "Dataset Synthesis"]
              },
              {
                title: "Agentic Systems Design",
                icon: <Cpu />,
                features: ["Multi-agent Orchestration", "Predictive Output Loops", "Autonomous Action Guardrails"]
              }
            ].map((pillar, i) => (
              <div key={i} className="p-12 bg-dark-blue/40 rounded-[3rem] border border-white/5 hover:border-accent-premier/40 transition-all group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-premier mb-10 group-hover:rotate-12 transition-transform">{pillar.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-tight">{pillar.title}</h3>
                <ul className="space-y-4">
                  {pillar.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs text-[var(--text-body)] font-medium">
                      <div className="w-1 h-1 rounded-full bg-accent-premier" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 tracking-tighter leading-none">
            Ready for a Different <br /> <span className="text-accent-premier">Class of Intelligence?</span>
          </h2>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-4 bg-white text-black px-12 h-18 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent-premier transition-all"
          >
            Start the conversation <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
