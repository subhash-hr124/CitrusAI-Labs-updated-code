import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Lightbulb, TrendingUp, Cpu, BarChart, Database, Sparkles, Layers, Zap, Target, Users } from 'lucide-react';
import { Page } from '../types';

interface AboutPageProps {
  setCurrentPage: (p: Page) => void;
}

export const AboutPage = ({ setCurrentPage }: AboutPageProps) => (
  <div className="min-h-screen bg-deep-dark">
    {/* Hero Section */}
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-[var(--text-heading)] mb-8 leading-tight"
        >
          We’re Not Just Building Software.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-premier">We’re Building What’s Next.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--text-body)] max-w-3xl mx-auto leading-relaxed"
        >
          Citrus AI Labs is a new-age technology company focused on creating powerful, AI-driven products that solve real-world problems.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-8 bg-[var(--dark-blue)]/50 rounded-3xl border border-[var(--border-color)] backdrop-blur-sm max-w-2xl mx-auto"
        >
          <p className="text-lg text-[var(--text-body)] italic">
            "We don’t believe in complex jargon or over-engineered solutions. We believe in <span className="text-[var(--text-heading)] font-bold">building fast, building smart, and building what truly matters.</span>"
          </p>
        </motion.div>
      </div>
    </section>

    {/* What Drives Us */}
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-8">What Drives Us</h2>
            <p className="text-lg text-[var(--text-body)] mb-12 leading-relaxed">
              Most businesses struggle with outdated systems, slow processes, and disconnected tools. We exist to change that.
            </p>
            <div className="space-y-6">
              {[
                { text: "Turn ideas into scalable products", icon: <Rocket className="text-electric-blue" /> },
                { text: "Turn challenges into smart solutions", icon: <Lightbulb className="text-accent-premier" /> },
                { text: "Turn businesses into future-ready organizations", icon: <TrendingUp className="text-neon-purple" /> }
              ].map((goal, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-[var(--dark-blue)] rounded-2xl border border-[var(--border-color)] hover:border-accent-premier transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 bg-[var(--deep-dark)] rounded-xl flex items-center justify-center border border-[var(--border-color)]">
                    {goal.icon}
                  </div>
                  <span className="text-lg text-[var(--text-heading)] font-medium">{goal.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-[var(--dark-blue)] rounded-[2.5rem] border border-[var(--border-color)] flex items-center justify-center overflow-hidden relative group shadow-2xl">
              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-[var(--text-heading)] mb-4">Our Goal</div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-premier font-bold text-xl tracking-widest">Simple & Impactful</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What We Build */}
    <section className="py-16 bg-[var(--dark-blue)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-4">What We Build</h2>
          <p className="text-xl text-[var(--text-body)]">We design and develop impactful solutions across key sectors.</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "Agentic AI Workflows", desc: "Autonomous intelligent agents that solve complex business logic.", icon: <Cpu size={40} />, color: "text-accent-premier" },
      { title: "Advanced Analytics", desc: "Predictive modeling and big data insights for strategic growth.", icon: <BarChart size={40} />, color: "text-electric-blue" },
      { title: "Enterprise Warehousing", desc: "Highly available, secure, and scalable data lakes for modern firms.", icon: <Database size={40} />, color: "text-neon-purple" },
      { title: "Generative AI Labs", desc: "Custom LLM training and multimodal application development.", icon: <Sparkles size={40} />, color: "text-accent-premier" },
      { title: "Cloud Native Infra", desc: "Robust data architectures built for precision and reliability.", icon: <Layers size={40} />, color: "text-electric-blue" },
      { title: "Process Intelligence", desc: "AI-driven automation that transforms operational efficiency.", icon: <Zap size={40} />, color: "text-neon-purple" }
    ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--deep-dark)] p-10 rounded-[2rem] border border-[var(--border-color)] hover:border-accent-premier transition-all text-center shadow-sm"
            >
              <div className={`mb-8 flex justify-center ${item.color}`}>{item.icon}</div>
              <h3 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-4">{item.title}</h3>
              <p className="text-[var(--text-body)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent-premier/10 border border-accent-premier/20 rounded-full text-accent-premier font-bold">
            <Sparkles size={20} />
            Artificial Intelligence + Practical Thinking
          </div>
        </div>
      </div>
    </section>

    {/* How We Work & Why We're Different */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* How We Work */}
          <div className="bg-[var(--dark-blue)] p-12 rounded-[3rem] border border-[var(--border-color)] shadow-sm">
            <h2 className="text-3xl font-display font-bold text-[var(--text-heading)] mb-8">How We Work</h2>
            <div className="space-y-8">
              {[
                { title: "No unnecessary layers", desc: "Just clear thinking and execution" },
                { title: "Speed over delays", desc: "We move fast and iterate faster" },
                { title: "Real-world focus", desc: "If it doesn’t solve a problem, we don’t build it" }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-accent-premier font-display font-bold text-2xl">0{i+1}</div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[var(--text-heading)] mb-2">{step.title}</h4>
                    <p className="text-[var(--text-body)] opacity-80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why We're Different */}
          <div className="bg-[var(--dark-blue)] p-12 md:p-20 rounded-[3rem] border border-[var(--border-color)] shadow-sm">
            <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-8">Why We’re Different</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Startup speed", icon: <Zap className="text-electric-blue" />, desc: "Enterprise-quality delivery" },
                { title: "AI-first approach", icon: <Cpu className="text-accent-premier" />, desc: "In everything we create" },
                { title: "Outcome-driven", icon: <Target className="text-neon-purple" />, desc: "Mindset — not just outputs" },
                { title: "True partnership", icon: <Users className="text-electric-blue" />, desc: "We build with you" }
              ].map((diff, i) => (
                <div key={i} className="p-6 bg-[var(--deep-dark)] rounded-2xl border border-[var(--border-color)]">
                  <div className="mb-4">{diff.icon}</div>
                  <h4 className="font-display font-bold text-[var(--text-heading)] mb-1">{diff.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Bottom Line */}
    <section className="py-16 bg-gradient-to-b from-[var(--deep-dark)] to-[var(--dark-blue)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-6">Our Vision</h2>
          <p className="text-2xl text-[var(--text-body)] leading-relaxed mb-16 opacity-90">
            To become a go-to technology partner for organizations that want to move faster, think smarter, and lead their industry.
          </p>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-16" />
          
          <h3 className="text-2xl font-display font-bold text-accent-premier mb-6 tracking-widest uppercase">The Bottom Line</h3>
          <p className="text-xl text-[var(--text-muted)] mb-4">We’re here to cut through the noise and build solutions that actually work.</p>
          <p className="text-2xl text-[var(--text-heading)] font-bold">No fluff. No delays. No overpromises.<br />Just impactful technology, delivered right.</p>
        </div>
      </div>
    </section>

    {/* Let's Build Something Powerful */}
    <section className="py-16 bg-accent-premier">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-3xl font-display font-semibold text-black mb-6">Let’s Build Something Powerful</h2>
        <p className="text-xl text-black/80 max-w-2xl mx-auto mb-12 font-medium">
          If you have an idea, a problem, or a vision — we’re ready to make it real.
        </p>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-black text-white px-12 h-[56px] rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl"
        >
          Get Started Today
        </button>
      </div>
    </section>
  </div>
);
