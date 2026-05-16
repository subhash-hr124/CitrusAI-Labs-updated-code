import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Target, Rocket } from 'lucide-react';
import { Page } from '../types';
import { PRODUCTS_DATA } from '../constants';
import { LogoBackground } from '../components/LogoBackground';

interface ProductDetailPageProps {
  productId: string;
  setCurrentPage: (p: Page) => void;
}

export const ProductDetailPage = ({ productId, setCurrentPage }: ProductDetailPageProps) => {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-[var(--deep-dark)]">
      {/* Dynamic Product Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden border-b border-[var(--border-color)]">
        <LogoBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => setCurrentPage('products')}
            className="group flex items-center gap-3 text-accent-premier text-xs font-bold uppercase tracking-[0.2em] mb-16 hover:gap-5 transition-all"
          >
            <ArrowRight size={16} className="rotate-180" /> Back to Products
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-[var(--charcoal)] rounded-3xl flex items-center justify-center text-accent-premier border border-[var(--border-color)] mb-10 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-accent-premier/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {React.cloneElement(product.icon as React.ReactElement, { size: 40, className: "relative z-10" })}
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold text-[var(--text-heading)] mb-8 tracking-tighter leading-[0.85]">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-accent-premier" />
                <p className="text-sm font-bold text-accent-premier uppercase tracking-[0.4em]">
                  {product.tagline}
                </p>
              </div>
              <p className="text-2xl text-[var(--text-body)] leading-relaxed mb-12 max-w-xl font-light">
                {product.desc}
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-accent-premier text-black px-12 h-[64px] rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-accent-premier/20 active:scale-95">
                  Request Access
                </button>
                <button className="bg-transparent border border-[var(--border-color)] text-[var(--text-heading)] px-12 h-[64px] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  Documentation
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3.5] rounded-[4rem] overflow-hidden border border-[var(--border-color)] bg-[var(--dark-blue)] group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-accent-premier/10 via-transparent to-transparent opacity-50" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                  {React.cloneElement(product.icon as React.ReactElement, { size: 400 })}
               </div>
               
               <div className="relative h-full flex flex-col items-center justify-center p-12 lg:p-20">
                  {/* Visual Interface Preview */}
                  <div className="w-full max-w-md bg-[var(--deep-dark)] rounded-3xl border border-white/10 shadow-2xl p-8 space-y-10 relative overflow-hidden backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
                      </div>
                      <div className="text-[9px] font-bold tracking-widest text-accent-premier uppercase">AI Instance: ACTIVE</div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-accent-premier/20 flex items-center justify-center text-accent-premier">
                            <Sparkles size={20} />
                          </div>
                          <div className="space-y-2 flex-1">
                             <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                             <div className="h-2 w-full bg-white/10 rounded-full" />
                             <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5 mt-4" />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       {[1, 2].map(i => (
                         <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/5 space-y-3">
                            <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
                            <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Metrics / Stats Bento */}
      <section className="py-32 bg-[var(--dark-blue)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.stats?.map((stat: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[var(--deep-dark)] p-12 rounded-[3rem] border border-[var(--border-color)] group hover:border-accent-premier transition-all"
                >
                  <div className="text-6xl font-display font-bold text-accent-premier mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                    {stat.val}
                  </div>
                  <div className="text-xl font-bold text-[var(--text-heading)] mb-2">{stat.label}</div>
                  <p className="text-[var(--text-muted)] text-sm">{stat.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* How It Works - The Process Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-2xl">
               <h2 className="text-[10px] font-bold text-accent-premier uppercase tracking-[0.5em] mb-6">Process Intelligence</h2>
               <h2 className="text-4xl md:text-6xl font-display font-light text-[var(--text-heading)] tracking-tight leading-[0.9]">How {product.title} Simplifies Complexity</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Visual connector line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent z-0" />
            
            {product.howItWorks?.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 space-y-8"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--deep-dark)] border border-accent-premier text-accent-premier flex items-center justify-center font-display font-bold text-xl shadow-[0_0_20px_rgba(66,234,149,0.2)]">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-4">{step.title}</h3>
                  <p className="text-[var(--text-body)] leading-relaxed opacity-70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Feature Grid */}
      <section className="py-32 bg-[var(--dark-blue)]/50 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] tracking-tight mb-8">Modular & Scalable Capabilities</h2>
            <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto">Built on our proprietary neural architecture for enterprise reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[var(--deep-dark)] p-12 rounded-[3rem] border border-[var(--border-color)] hover:border-accent-premier transition-all shadow-sm group hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-accent-premier/5 rounded-xl flex items-center justify-center text-accent-premier mb-10 group-hover:bg-accent-premier/20 transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">{feature.title}</h3>
                <p className="text-[var(--text-body)] leading-relaxed text-sm opacity-60 group-hover:opacity-100 transition-opacity">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-light text-[var(--text-heading)] mb-12 tracking-tight">Industry-Leading Utility</h2>
              <div className="space-y-6">
                {product.useCases?.map((use: any, i: number) => (
                  <div key={i} className="p-10 bg-[var(--charcoal)] rounded-[2.5rem] border border-[var(--border-color)] hover:bg-accent-premier/5 transition-all group">
                    <div className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--deep-dark)] flex items-center justify-center text-accent-premier border border-[var(--border-color)] group-hover:scale-110 transition-transform">
                         <Target size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[var(--text-heading)] mb-2">{use.title}</h4>
                        <p className="text-[var(--text-muted)] leading-relaxed text-sm">{use.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px]">
               <div className="absolute inset-x-0 bottom-0 top-20 bg-accent-premier/5 rounded-[4rem] border border-accent-premier/10 overflow-hidden">
                  <div className="p-16 space-y-12">
                     <div className="space-y-4">
                        <div className="h-[2px] w-full bg-accent-premier/20" />
                        <div className="h-[2px] w-2/3 bg-accent-premier/20" />
                        <div className="h-[2px] w-full bg-accent-premier/20" />
                     </div>
                     <div className="flex items-center gap-10">
                        <div className="w-32 h-32 rounded-[2rem] bg-accent-premier flex items-center justify-center text-black shadow-2xl">
                           <Rocket size={64} />
                        </div>
                        <div>
                          <div className="text-4xl font-display font-bold text-accent-premier">Ready to Deploy</div>
                          <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mt-2">Zero technical friction / API-First</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-32 relative overflow-hidden bg-[var(--deep-dark)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-light text-[var(--text-heading)] mb-12 tracking-tight">Technical Stack & Infrastructure</h2>
              <p className="text-[var(--text-muted)] text-lg mb-12 leading-relaxed">
                {product.title} is built on a high-availability serverless architecture designed to process multi-petabyte datasets with sub-second latency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Deployment", val: "Edge / Regional" },
                  { label: "AI Model", val: "Gemini 1.5 Pro" },
                  { label: "Data Pipeline", val: "Real-time Stream" },
                  { label: "Encryption", val: "AES-256 (At-rest)" }
                ].map((spec, i) => (
                  <div key={i} className="p-6 bg-[var(--dark-blue)] rounded-2xl border border-[var(--border-color)]">
                    <div className="text-[10px] font-bold text-accent-premier uppercase tracking-widest mb-2">{spec.label}</div>
                    <div className="text-lg font-bold text-white">{spec.val}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--dark-blue)] rounded-[3rem] border border-[var(--border-color)] p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-premier/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-accent-premier/10 transition-all" />
               <h3 className="text-2xl font-display font-bold text-white mb-10 tracking-tight">Integration Capabilities</h3>
               <div className="space-y-6">
                  {[
                    "RESTful JSON Architecture",
                    "Webhook Events & Listeners",
                    "Multi-tenant Permissioning",
                    "Identity Provider (IdP) Sync",
                    "Custom Field Mapping"
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 text-[var(--text-body)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-premier" />
                      <span className="text-sm font-medium">{cap}</span>
                    </div>
                  ))}
               </div>
               <button className="mt-12 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold text-white uppercase tracking-widest hover:bg-accent-premier hover:text-black hover:border-accent-premier transition-all">
                  Download API Reference
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related News / Insights */}
      <section className="py-32 bg-[var(--dark-blue)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
             <h2 className="text-3xl font-display font-bold text-white">Related Research</h2>
             <button className="text-accent-premier text-xs font-bold uppercase tracking-widest">Archive</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(i => (
              <div key={i} className="group p-8 bg-[var(--deep-dark)] rounded-[2.5rem] border border-[var(--border-color)] hover:border-accent-premier transition-all flex gap-8 items-center cursor-pointer">
                <div className="w-24 h-24 bg-accent-premier/5 rounded-2xl shrink-0 flex items-center justify-center text-accent-premier group-hover:scale-110 transition-transform">
                  <Sparkles size={32} />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-accent-premier uppercase tracking-widest mb-2">Research Paper</div>
                   <h4 className="text-xl font-bold text-white mb-2 leading-tight">Optimizing {product.title} for high-load enterprise environments.</h4>
                   <p className="text-xs text-[var(--text-muted)]">Analysis of latency reduction in agentic workflows.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-40 bg-accent-premier relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 leading-[0.85] tracking-tighter">Empower Your Vision with {product.title}</h2>
          <p className="text-2xl mb-16 font-medium opacity-80 max-w-2xl mx-auto">Transform your operations with the most advanced intelligence suite built for the modern enterprise.</p>
          <div className="flex flex-col sm:row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-black text-white px-16 h-20 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95">
              Book a Strategy Call
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-black/20 text-black px-16 h-20 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
