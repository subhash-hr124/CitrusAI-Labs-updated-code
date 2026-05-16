import React from 'react';
import { motion } from 'motion/react';
import { Search, Code, TrendingUp, Sparkles, Globe, Zap, BarChart, Lightbulb, GraduationCap, Stethoscope, Building2, Rocket } from 'lucide-react';
import { Page } from '../types';
import { LogoBackground } from '../components/LogoBackground';

interface SolutionsPageProps {
  setCurrentPage: (p: Page) => void;
}

export const SolutionsPage = ({ setCurrentPage }: SolutionsPageProps) => (
  <div className="min-h-screen bg-deep-dark">
    {/* Hero Section */}
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-4xl font-display font-bold text-[var(--text-heading)] mb-6">Transforming Industries with Smart Solutions</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We combine deep domain expertise with advanced technologies to deliver measurable business impact.
        </p>
      </div>
    </section>

    {/* How We Deliver Value */}
    <section className="py-24 border-t border-[var(--border-color)] relative overflow-hidden">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-4">How We Deliver Value</h2>
          <p className="text-[var(--text-muted)] text-lg">Consult → Build → Scale</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent-premier/0 via-accent-premier/20 to-accent-premier/0 -translate-y-1/2 -z-10" />
          
          {[
            {
              title: "Consult",
              desc: "We understand your business challenges and define the right solution strategy.",
              icon: <Search size={32} />,
              color: "text-electric-blue",
              bg: "bg-electric-blue/10"
            },
            {
              title: "Build",
              desc: "Our engineering teams design and develop scalable, AI-powered systems.",
              icon: <Code size={32} />,
              color: "text-accent-premier",
              bg: "bg-accent-premier/10"
            },
            {
              title: "Scale",
              desc: "We ensure seamless deployment, performance optimization, and continuous growth.",
              icon: <TrendingUp size={32} />,
              color: "text-neon-purple",
              bg: "bg-neon-purple/10"
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[var(--dark-blue)] p-10 rounded-[2.5rem] border border-[var(--border-color)] text-center relative group hover:border-accent-premier/30 transition-all shadow-sm"
            >
              <div className={`w-20 h-20 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[var(--border-color)] group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-4">{step.title}</h3>
              <p className="text-[var(--text-body)] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Citrus AI Labs? */}
    <section className="py-24 bg-[var(--dark-blue)]/50 relative overflow-hidden">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-8">Why Citrus AI Labs?</h2>
            <div className="space-y-6">
              {[
                { title: "AI-first approach to every solution", icon: <Sparkles className="text-electric-blue" /> },
                { title: "Strong domain expertise across industries", icon: <Globe className="text-accent-premier" /> },
                { title: "Agile and scalable delivery models", icon: <Zap className="text-neon-purple" /> },
                { title: "Focus on measurable business outcomes", icon: <BarChart className="text-electric-blue" /> },
                { title: "Innovation-driven mindset", icon: <Lightbulb className="text-accent-premier" /> }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[var(--deep-dark)] rounded-2xl border border-[var(--border-color)] shadow-sm"
                >
                  <div className="shrink-0">{benefit.icon}</div>
                  <span className="text-lg text-[var(--text-body)] font-medium">{benefit.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] border border-[var(--border-color)] flex items-center justify-center overflow-hidden relative group shadow-2xl bg-[var(--dark-blue)]">
              <div className="relative z-10 text-center p-12">
                <div className="w-24 h-24 bg-[var(--deep-dark)] rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[var(--border-color)] shadow-xl">
                  <Sparkles size={40} className="text-accent-premier" />
                </div>
                <h3 className="text-3xl font-display font-bold text-[var(--text-heading)] mb-4">Innovation at Core</h3>
                <p className="text-[var(--text-body)] text-lg font-medium">We don't just build software; we engineer future-ready solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Industries We Serve */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-4">Industries We Serve</h2>
          <p className="text-[var(--text-muted)] text-lg">Tailored technology solutions for diverse sectors.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Education & EdTech", icon: <GraduationCap size={32} />, color: "text-electric-blue" },
            { title: "Healthcare", icon: <Stethoscope size={32} />, color: "text-accent-premier" },
            { title: "IT & Software Services", icon: <Building2 size={32} />, color: "text-neon-purple" },
            { title: "Startups & Product Companies", icon: <Rocket size={32} />, color: "text-electric-blue" }
          ].map((industry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                if (industry.title.toLowerCase().includes('healthcare')) setCurrentPage('sol-healthcare');
                else if (industry.title.toLowerCase().includes('education')) setCurrentPage('sol-education');
                else if (industry.title.toLowerCase().includes('it')) setCurrentPage('sol-it');
                else if (industry.title.toLowerCase().includes('startups')) setCurrentPage('sol-startups');
              }}
              className="bg-[var(--dark-blue)] p-8 rounded-3xl border border-[var(--border-color)] text-center hover:border-accent-premier transition-all group shadow-sm cursor-pointer"
            >
              <div className={`w-16 h-16 bg-[var(--deep-dark)] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[var(--border-color)] transition-all ${industry.color}`}>
                {industry.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-[var(--text-heading)]">{industry.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 bg-accent-premier relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-3xl font-display font-semibold text-black mb-8">Let’s Build the Future Together</h2>
        <p className="text-xl text-black/80 max-w-3xl mx-auto mb-12 font-medium">
          Whether you're looking to modernize your systems, build an AI product, or solve complex business challenges — Citrus AI Labs is your technology partner.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-black text-white px-10 h-[52px] rounded-full text-sm font-bold hover:scale-105 transition-all shadow-2xl"
          >
            Talk to our experts today
          </button>
        </div>
        <p className="mt-8 text-black/60 font-medium">👉 Transform your vision into reality.</p>
      </div>
    </section>
  </div>
);
