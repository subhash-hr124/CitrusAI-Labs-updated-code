import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Zap, Globe, Heart, ArrowRight, UserPlus, Coffee, Briefcase } from 'lucide-react';
import { Page } from '../types';

interface CareersPageProps {
  setCurrentPage: (p: Page) => void;
}

export const CareersPage = ({ setCurrentPage }: CareersPageProps) => {
  return (
    <div className="min-h-screen bg-deep-dark">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(247,208,68,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              <Users size={14} /> Join the Lab
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.85] tracking-tighter">
              Build the <span className="text-accent-premier">Neural Backbone</span> of the Future.
            </h1>
            <p className="text-xl text-[var(--text-body)] leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              We're a distributed team of engineers, designers, and researchers obsessed with solving the hardest problems in AI. No politics, no pointless meetings—just high-velocity shipping.
            </p>
            <button 
              className="bg-accent-premier text-black px-12 h-18 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              onClick={() => {
                const element = document.getElementById('open-roles');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Open Roles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-dark-blue/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Deep Independence",
                desc: "We hire experts and trust them. You own your roadmap, your architecture, and your output.",
                icon: <Target className="text-accent-premier" />
              },
              {
                title: "Radical Transparency",
                desc: "Every metric, every decision, and every board deck is shared with the entire team. We build in the light.",
                icon: <Zap className="text-accent-premier" />
              },
              {
                title: "Human First",
                desc: "Remote-first, asynchronous focus, and unlimited growth budget. We optimize for the long game.",
                icon: <Heart className="text-accent-premier" />
              }
            ].map((value, i) => (
              <div key={i} className="text-left">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-accent-premier">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-[var(--text-body)] opacity-60 leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Globe />, label: "Remote work", detail: "Work from anywhere" },
                      { icon: <Heart />, label: "Health & Wellness", detail: "Premium coverage" },
                      { icon: <Zap />, label: "Latest Tech", detail: "Top tier equipment" },
                      { icon: <Coffee />, label: "Retreats", detail: "Annual team gatherings" }
                    ].map((benefit, i) => (
                      <div key={i} className="p-8 bg-dark-blue/50 rounded-[2rem] border border-white/5 hover:border-accent-premier/30 transition-all">
                        <div className="text-accent-premier mb-4">{benefit.icon}</div>
                        <div className="text-white font-bold text-sm mb-1">{benefit.label}</div>
                        <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">{benefit.detail}</div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                    Fueling the Lab With <br /> <span className="text-accent-premier">Exceptional Perks.</span>
                 </h2>
                 <p className="text-lg text-[var(--text-body)] opacity-70 leading-relaxed mb-10 font-light">
                    We believe that exceptional people need exceptional environments. We invest heavily in our team's tools, health, and personal growth.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Equity for all full-time members",
                      "Distributed team across 12 countries",
                      "Unlimited PTO (Minimum 15 days mandatory)",
                      "Learning & development stipends"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-medium">
                        <ArrowRight size={16} className="text-accent-premier" /> {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-32 bg-dark-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-display font-bold text-white tracking-tight">Current Openings</h2>
              <div className="hidden md:block px-6 py-2 bg-white/5 rounded-full text-xs text-white border border-white/10">3 active roles</div>
           </div>

           <div className="space-y-4">
              {[
                { title: "Senior AI Engineer", team: "Technical Staff", location: "Remote // UTC ± 4" },
                { title: "Product Designer", team: "Design & UX", location: "Remote // Worldwide" },
                { title: "Growth & Strategy Lead", team: "Operations", location: "New York / London / Remote" }
              ].map((role, i) => (
                <div key={i} className="group p-8 md:p-10 bg-deep-dark border border-white/5 rounded-[2.5rem] hover:border-accent-premier transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer">
                   <div>
                     <div className="text-[10px] font-bold text-accent-premier uppercase tracking-widest mb-4">{role.team}</div>
                     <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">{role.title}</h3>
                     <div className="mt-4 flex items-center gap-3 text-[var(--text-muted)] text-xs">
                        <Globe size={14} /> <span>{role.location}</span>
                     </div>
                   </div>
                   <button className="flex items-center gap-3 self-start md:self-center px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest group-hover:bg-accent-premier group-hover:text-black group-hover:border-accent-premier transition-all">
                      Apply Now <ArrowRight size={16} />
                   </button>
                </div>
              ))}
           </div>

           <div className="mt-20 p-12 bg-accent-premier rounded-[3rem] text-center">
              <h3 className="text-4xl font-display font-bold text-black mb-6 tracking-tight">Don't See Your Fit?</h3>
              <p className="text-black/70 max-w-xl mx-auto mb-10 font-bold">We're always looking for geniuses. Send a brief note about what you're building and why you belong here.</p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-black text-white px-12 h-16 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Drop us a line
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};
