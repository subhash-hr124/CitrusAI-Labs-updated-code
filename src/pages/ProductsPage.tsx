import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../types';
import { PRODUCTS_DATA } from '../constants';
import { LogoBackground } from '../components/LogoBackground';

interface ProductsPageProps {
  setSelectedProductId: (id: string) => void;
  setCurrentPage: (p: Page) => void;
}

export const ProductsPage = ({ setSelectedProductId, setCurrentPage }: ProductsPageProps) => {
  return (
    <div className="min-h-screen bg-[var(--deep-dark)]">
      {/* Page Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden border-b border-[var(--border-color)]">
        <LogoBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-premier/10 border border-accent-premier/20 rounded-full text-accent-premier text-xs font-bold mb-8 tracking-widest uppercase"
          >
            Our Ecosystem
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-bold text-[var(--text-heading)] mb-8 leading-tight tracking-tight"
          >
            Intelligent Products for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-premier">the Modern Enterprise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-body)] max-w-3xl mx-auto leading-relaxed"
          >
            From life sciences to mental wellness and conversational analytics, we build AI-native platforms that solve complex challenges and empower human potential.
          </motion.p>
        </div>
      </section>

      {/* Grid View for Products */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--dark-blue)] rounded-[2.5rem] border border-[var(--border-color)] p-10 flex flex-col hover:border-accent-premier transition-all group shadow-sm overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {React.cloneElement(product.icon as React.ReactElement, { size: 120 })}
                </div>
                
                <div className="w-16 h-16 bg-[var(--deep-dark)] rounded-2xl flex items-center justify-center text-accent-premier border border-[var(--border-color)] mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  {React.cloneElement(product.icon as React.ReactElement, { size: 32 })}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-2 group-hover:text-accent-premier transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs font-bold text-accent-premier uppercase tracking-widest mb-6">
                  {product.tagline}
                </p>
                
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-10 flex-1">
                  {product.desc}
                </p>
                
                <button 
                  onClick={() => {
                    setCurrentPage(`prod-${product.id}` as Page);
                  }}
                  className="w-full bg-[var(--deep-dark)] border border-[var(--border-color)] text-[var(--text-heading)] h-[52px] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-premier hover:text-black hover:border-accent-premier transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Explore Product <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated CTA */}
      <section className="py-32 bg-[var(--deep-dark)] relative overflow-hidden border-t border-[var(--border-color)]">
        <LogoBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-light text-[var(--text-heading)] mb-12 tracking-tight">Ready to integrate <br /> intelligence?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-[var(--text-heading)] text-[var(--deep-dark)] px-12 h-16 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
              Partner with Citrus
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-[var(--border-color)] text-[var(--text-heading)] px-12 h-16 rounded-full font-bold text-sm hover:bg-white/5 transition-all">
              Technical Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
