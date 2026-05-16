import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Zap, Rocket, Search, BarChart3, GraduationCap, Stethoscope, Building2, Cpu, Sparkles } from 'lucide-react';
import { Page } from '../types';
import { CASE_STUDIES, TECH_STACK } from '../constants';
import { LogoBackground } from '../components/LogoBackground';

interface HomePageProps {
  setCurrentPage: (p: Page) => void;
}

export const HomePage = ({ setCurrentPage }: HomePageProps) => {
  const [index, setIndex] = useState(0);
  const headlines = [
    {
      title: "Scale Intelligence Across Your Enterprise",
      subtitle: "Custom AI architectures designed to optimize workflows, automate complex processes, and drive measurable ROI.",
      tag: "Enterprise AI Solutions"
    },
    {
      title: "Accelerate Your Digital Product Roadmap",
      subtitle: "We partner with forward-thinking leaders to design, build, and launch intelligent software at market-leading speed.",
      tag: "Rapid Engineering"
    },
    {
      title: "Data-Driven Strategy, Neural Execution",
      subtitle: "Transform raw data into competitive advantages with scalable engineering and predictive analytics built for growth.",
      tag: "Strategic Innovation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center bg-[var(--deep-dark)]">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage: 'url("/Hero Backgroung 1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}
        />

        <div className="absolute inset-0 bg-[var(--deep-dark)]/30 z-0" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent-premier/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#42EA95]" />
                  <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">
                    {headlines[index].tag}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-[84px] font-display font-bold text-[var(--text-heading)] tracking-[-3px] mb-10 leading-[0.9] lg:leading-[0.85]">
                  {headlines[index].title}
                </h1>
                
                <p className="text-[var(--text-body)] text-xl md:text-2xl mb-14 max-w-2xl leading-relaxed font-light">
                  {headlines[index].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="w-full sm:w-auto px-10 bg-[var(--text-heading)] text-[var(--deep-dark)] h-[56px] rounded-full text-sm font-bold tracking-tight hover:scale-105 transition-all flex items-center justify-center gap-3 group shadow-lg"
                  >
                    Partner with us
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex gap-3">
                      <div 
                        onClick={() => setIndex((prev) => (prev - 1 + headlines.length) % headlines.length)}
                        className="w-12 h-12 border border-[var(--border-color)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--accent-premier)]/10 hover:border-accent-premier transition-all text-[var(--text-muted)] hover:text-accent-premier"
                      >
                          <ChevronRight size={20} className="rotate-180" />
                      </div>
                      <div 
                        onClick={() => setIndex((prev) => (prev + 1) % headlines.length)}
                        className="w-12 h-12 border border-[var(--border-color)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--accent-premier)]/10 hover:border-accent-premier transition-all text-[var(--text-muted)] hover:text-accent-premier"
                      >
                          <ChevronRight size={20} />
                      </div>
                    </div>
                    
                    <div className="h-[1px] w-12 bg-[var(--border-color)] hidden sm:block" />
                    
                    <div className="flex items-center gap-2">
                       {headlines.map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? 'w-6 bg-[var(--accent-premier)]' : 'w-1.5 bg-[var(--border-color)]'}`}
                        />
                       ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

    {/* Value Proposition Section */}
    <section className="py-24 bg-[var(--deep-dark)] border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-premier" />
              <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] mb-8 leading-[1.1] tracking-tight">
              Turning Complex Technology into Business Solutions
            </h2>
            <p className="text-[var(--text-body)] text-lg mb-10 leading-relaxed max-w-lg">
              We help you turn ideas into scalable, intelligent software solutions that save you time, money and stress.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 bg-[var(--text-heading)] text-[var(--deep-dark)] h-[48px] rounded-full text-xs font-bold tracking-tight hover:scale-105 transition-all flex items-center justify-center shadow-lg"
            >
              Learn More
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative group lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              <img 
                src="/What We Do.png" 
                alt="What We Do" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-24 bg-[var(--dark-blue)] border-b border-[var(--border-color)] relative overflow-hidden">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-premier" />
            <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">Why Citrus AI Labs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] mb-4 tracking-tight">Put Your Network in Safe Hands</h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl font-medium">Our loyal customers trust us to manage some of their most business-critical systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "AI-First Approach", 
              desc: "Intelligence built into every solution",
              icon: <Zap size={32} />
            },
            { 
              title: "Fast Execution", 
              desc: "Go from idea to product quickly",
              icon: <Rocket size={32} />
            },
            { 
              title: "Deep Expertise", 
              desc: "Data, AI, and engineering specialists",
              icon: <Search size={32} />
            },
            { 
              title: "Scalable Solutions", 
              desc: "Built to grow with your business",
              icon: <BarChart3 size={32} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--deep-dark)] p-10 rounded-[2rem] border border-[var(--border-color)] hover:border-accent-premier transition-all group shadow-sm"
            >
              <div className="text-accent-premier mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold mb-4 tracking-tighter text-[var(--text-heading)]">{item.title}</h3>
              <p className="text-[var(--text-muted)] leading-loose text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries Section */}
    <section className="py-32 bg-[var(--deep-dark)] relative overflow-hidden">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-premier" />
            <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] mb-4 leading-tight">
            Productivity Solutions That Capitalise <br /> on Your Network Investment
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Education",
              icon: <GraduationCap size={48} className="text-accent-premier" />,
              desc: "Empowering students and institutions with AI-driven learning and career platforms"
            },
            {
              title: "Healthcare",
              icon: <Stethoscope size={48} className="text-electric-blue" />,
              desc: "Driving better outcomes through data, automation, and intelligent systems"
            },
            {
              title: "IT & Enterprises",
              icon: <Building2 size={48} className="text-[var(--text-heading)]" />,
              desc: "Scaling businesses with advanced data platforms and AI solutions"
            }
          ].map((industry, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-[var(--dark-blue)] border border-[var(--border-color)] hover:border-accent-premier transition-all text-left shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--deep-dark)] rounded-2xl mb-12 border border-[var(--border-color)]">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-heading)] tracking-tighter">{industry.title}</h3>
              <p className="text-[var(--text-muted)] leading-[27px] text-sm">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-32 bg-dark-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-premier" />
            <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px]">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] leading-tight">Simple Process. <br/> Powerful Outcomes.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { step: "01", title: "Understand", desc: "We deep-dive into your business challenges and goals", icon: <Search size={24} /> },
            { step: "02", title: "Build", desc: "Design and develop tailored AI-powered solutions", icon: <Cpu size={24} /> },
            { step: "03", title: "Scale", desc: "Deploy, optimize, and help you grow seamlessly", icon: <Rocket size={24} /> }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--deep-dark)] p-12 rounded-[2.5rem] border border-[var(--border-color)] text-left relative hover:border-accent-premier transition-all shadow-sm">
              <div className="absolute -top-6 left-12 w-12 h-12 bg-accent-premier text-black rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {item.step}
              </div>
              <div className="text-accent-premier mb-10 flex">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-heading)] tracking-tighter">{item.title}</h3>
              <p className="text-[var(--text-muted)] leading-loose text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-24 bg-[var(--deep-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Clients Served", value: "30+" },
            { label: "Faster Delivery", value: "40%" },
            { label: "Improved Efficiency", value: "65%" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-[var(--text-heading)] mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-[var(--text-muted)] tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies Section */}
    <section className="py-32 bg-[var(--dark-blue)] border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-premier" />
              <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] leading-tight">Solutions That Deliver <br /> Real-World Impact.</h2>
          </div>
          <button 
            onClick={() => setCurrentPage('blog')}
            className="flex items-center gap-2 text-xs font-bold text-accent-premier hover:gap-4 transition-all uppercase tracking-widest"
          >
            See all case studies <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--deep-dark)] rounded-[2.5rem] border border-[var(--border-color)] overflow-hidden shadow-sm group hover:border-accent-premier transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-dark)] to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-xs font-bold text-accent-premier uppercase tracking-widest mb-2">{study.client}</div>
                  <div className="text-xl font-bold text-[var(--text-heading)]">{study.title}</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">{study.desc}</p>
                <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-6">
                  <div className="text-lg font-display font-bold text-accent-premier">{study.results}</div>
                  <ArrowRight size={18} className="text-[var(--text-muted)] group-hover:text-accent-premier group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Stack Section */}
    <section className="py-32 bg-[var(--deep-dark)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-premier" />
            <span className="text-[var(--text-heading)] text-[11px] font-bold tracking-[1.2px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)]">Modern Data Stack & <br /> AI Architecture.</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TECH_STACK.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-[var(--dark-blue)] rounded-2xl border border-[var(--border-color)] flex flex-col items-center justify-center text-center group hover:border-accent-premier transition-all"
            >
              <div className="text-[var(--text-heading)] font-bold text-lg mb-2 group-hover:text-accent-premier transition-colors">{tech.name}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">{tech.category}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent-premier/5 border border-accent-premier/10 rounded-full text-xs font-bold text-accent-premier uppercase tracking-[0.2em]">
            <Sparkles size={16} /> Engineered for the Real-time Data Era
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[var(--dark-blue)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center bg-[var(--deep-dark)] rounded-3xl border border-[var(--border-color)] shadow-sm">
          <Sparkles size={40} className="text-accent-premier" />
        </div>
        <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-8 leading-tight">Our Vision</h2>
        <p className="text-2xl md:text-3xl text-[var(--text-body)] font-medium leading-relaxed italic">
          "To help businesses innovate faster and scale smarter with AI-driven technology."
        </p>
      </div>
    </section>

    <section className="py-24 bg-[var(--deep-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[var(--dark-blue)] to-[var(--deep-dark)] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-[var(--border-color)]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-3xl font-display font-semibold text-[var(--text-heading)] mb-6">Ready to Build Your Next <br /> AI-Powered Product?</h2>
            <p className="text-base md:text-base mb-10 text-[var(--text-muted)] max-w-2xl mx-auto">
              Let’s turn your idea into a powerful, scalable solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto bg-[var(--text-heading)] text-[var(--deep-dark)] px-10 h-[52px] rounded-full text-sm font-bold hover:scale-105 transition-all shadow-xl"
              >
                Talk to Our Experts
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto bg-transparent border-2 border-[var(--border-color)] text-[var(--text-heading)] px-10 h-[52px] rounded-full text-sm font-bold hover:bg-[var(--text-heading)]/5 transition-all"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};
