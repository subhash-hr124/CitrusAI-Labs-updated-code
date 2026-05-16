import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Briefcase, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { LogoBackground } from '../components/LogoBackground';

export const ContactPage = () => (
  <div className="min-h-screen bg-deep-dark">
    {/* Page Header */}
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden border-b border-[var(--border-color)]">
      <LogoBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 bg-accent-premier/10 border border-accent-premier/20 rounded-full text-accent-premier text-xs font-bold mb-8 tracking-widest uppercase"
        >
          Connect with us
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-display font-bold text-[var(--text-heading)] mb-8 leading-tight tracking-tight lowercase"
        >
          Let’s build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-premier">intelligence layer</span> of your business
        </motion.h1>
      </div>
    </section>

    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Details */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-[var(--text-heading)] mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Mail className="text-accent-premier" />, title: "Email", value: "info@citrusailabs.com", desc: "For general inquiries and partnerships" },
                  { icon: <Phone className="text-electric-blue" />, title: "Phone", value: "+91 9949890977", desc: "Direct sales & strategy" },
                  { icon: <MapPin className="text-neon-purple" />, title: "Office", value: "Hyderabad, India", desc: "T-Hub, Knowledge City" },
                  { icon: <Globe className="text-accent-premier" />, title: "Support", value: "Citrus Sync Team", desc: "24/7 Enterprise support" }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-[var(--dark-blue)] rounded-3xl border border-[var(--border-color)] hover:border-accent-premier transition-all shadow-sm">
                    <div className="w-12 h-12 bg-[var(--deep-dark)] rounded-xl flex items-center justify-center border border-[var(--border-color)] mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-heading)] mb-1 uppercase tracking-widest">{item.title}</h3>
                    <div className="text-lg font-bold text-accent-premier mb-2">{item.value}</div>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--dark-blue)] to-[var(--deep-dark)] p-12 rounded-[2.5rem] border border-[var(--border-color)] relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-6">Why Partner with Citrus?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: <MessageSquare size={18} />, text: "Direct access to AI engineering specialists" },
                    { icon: <Briefcase size={18} />, text: "Agile delivery cycles with fixed-timeline milestones" },
                    { icon: <Sparkles size={18} />, text: "Full IP ownership of custom built AI solutions" }
                  ].map((p, i) => (
                    <li key={i} className="flex gap-4 text-[var(--text-body)]">
                      <div className="shrink-0 mt-1 text-accent-premier">{p.icon}</div>
                      <span className="font-medium text-lg leading-snug">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--dark-blue)] p-12 md:p-16 rounded-[3.5rem] border border-[var(--border-color)] shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-[var(--text-heading)] mb-4">Start a Project</h2>
            <p className="text-[var(--text-muted)] mb-10">Fill out the form and our strategy team will be in touch within 12 hours.</p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest pl-2">Full Name</label>
                  <input type="text" className="w-full bg-[var(--deep-dark)] border border-[var(--border-color)] rounded-2xl px-6 h-16 text-sm focus:outline-none focus:border-accent-premier transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest pl-2">Company Email</label>
                  <input type="email" className="w-full bg-[var(--deep-dark)] border border-[var(--border-color)] rounded-2xl px-6 h-16 text-sm focus:outline-none focus:border-accent-premier transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest pl-2">Interest Area</label>
                <select className="w-full bg-[var(--deep-dark)] border border-[var(--border-color)] rounded-2xl px-6 h-16 text-sm focus:outline-none focus:border-accent-premier transition-all appearance-none">
                  <option>Select a product/service</option>
                  <option>MedResearch Solutions</option>
                  <option>MindBloom AI Implementation</option>
                  <option>Custom Conversational Analyst</option>
                  <option>Enterprise AI Strategy</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest pl-2">Message</label>
                <textarea rows={5} className="w-full bg-[var(--deep-dark)] border border-[var(--border-color)] rounded-3xl p-6 text-sm focus:outline-none focus:border-accent-premier transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-accent-premier text-black font-bold h-16 rounded-full uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-3">
                Send Enquiry <ArrowRight size={16} />
              </button>
              
              <p className="text-[10px] text-[var(--text-muted)] text-center font-medium">By submitting, you agree to our Privacy Policy and being contacted by Citrus AI.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Location Summary */}
    <section className="py-24 bg-[var(--deep-dark)]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-24" />
          <h3 className="text-xs font-bold text-accent-premier uppercase tracking-[0.5em] mb-12">Global Footprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
             <div className="space-y-4">
                <div className="text-xl font-bold text-[var(--text-heading)]">HQ: Hyderabad</div>
                <p className="text-sm text-[var(--text-muted)] opacity-70">T-Hub, Phase 2, Knowledge City Road, Madhapur, Telangana 500081</p>
             </div>
             <div className="space-y-4">
                <div className="text-xl font-bold text-[var(--text-heading)]">Remote-First Hubs</div>
                <p className="text-sm text-[var(--text-muted)] opacity-70">Bengaluru / Pune / Singapore / London (Strategic Sales)</p>
             </div>
          </div>
       </div>
    </section>
  </div>
);
