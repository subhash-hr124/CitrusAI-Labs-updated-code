import React, { useState } from 'react';
import { ChevronDown, Moon, Sun, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { PRODUCTS_DATA, SOLUTIONS_DATA } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
  setSelectedProductId: (id: string) => void;
}

export const Navbar = ({ currentPage, setCurrentPage, setSelectedProductId }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] border-b border-[var(--border-color)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <Logo className="text-[var(--nav-text)]" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 ml-auto h-full pr-10">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => {
                  if (link.id === 'products') setIsProductsOpen(true);
                  if (link.id === 'solutions') setIsSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.id === 'products') setIsProductsOpen(false);
                  if (link.id === 'solutions') setIsSolutionsOpen(false);
                }}
              >
                <button
                  onClick={() => {
                    setCurrentPage(link.id);
                    if (link.id === 'products') setIsProductsOpen(false);
                    if (link.id === 'solutions') setIsSolutionsOpen(false);
                  }}
                  className={`flex items-center gap-2 text-[13px] font-semibold tracking-normal transition-colors hover:text-accent-premier ${
                    currentPage === link.id ? 'text-accent-premier' : 'text-[var(--nav-text)]'
                  }`}
                >
                  {link.label}
                  {(link.id === 'products' || link.id === 'solutions') && (
                    <ChevronDown 
                      size={12} 
                      className={`transition-transform duration-300 ${(link.id === 'products' ? isProductsOpen : isSolutionsOpen) ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>

                {link.id === 'products' && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-80 overflow-hidden z-50 pointer-events-auto"
                      >
                        <div className="bg-dark-blue border border-white/10 rounded-3xl shadow-2xl p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {PRODUCTS_DATA.map((product) => (
                              <button
                                key={product.id}
                                onClick={() => {
                                  setCurrentPage(`prod-${product.id}` as Page);
                                  setIsProductsOpen(false);
                                }}
                                className="flex flex-col gap-2 p-3 rounded-2xl hover:bg-[var(--accent-premier)]/5 transition-all text-left group"
                              >
                                <div className="w-10 h-10 bg-[var(--charcoal)] rounded-xl flex items-center justify-center border border-[var(--border-color)] group-hover:border-accent-premier/30 transition-all">
                                  {React.cloneElement(product.icon as React.ReactElement, { size: 20 })}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[var(--text-heading)] group-hover:text-accent-premier transition-colors">{product.title}</div>
                                  <div className="text-[9px] text-[var(--text-muted)] tracking-wider truncate w-24">{product.tagline}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                            <button 
                              onClick={() => {
                                setCurrentPage('products');
                                setIsProductsOpen(false);
                              }}
                              className="w-full py-2 text-xs font-bold text-center text-[var(--text-muted)] hover:text-accent-premier transition-colors"
                            >
                              View All Products
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {link.id === 'solutions' && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-72 overflow-hidden z-50 pointer-events-auto"
                      >
                        <div className="bg-[var(--dark-blue)] border border-[var(--border-color)] rounded-3xl shadow-2xl p-4">
                          <div className="space-y-1">
                            {SOLUTIONS_DATA.map((item, i) => (
                              <button
                                key={i}
                                onClick={() => {
                                  if (item.title.toLowerCase().includes('healthcare')) setCurrentPage('sol-healthcare');
                                  else if (item.title.toLowerCase().includes('education')) setCurrentPage('sol-education');
                                  else if (item.title.toLowerCase().includes('it')) setCurrentPage('sol-it');
                                  else if (item.title.toLowerCase().includes('startups')) setCurrentPage('sol-startups');
                                  else setCurrentPage('solutions');
                                  setIsSolutionsOpen(false);
                                }}
                                className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-[var(--accent-premier)]/5 transition-all text-left group"
                              >
                                <div className={`w-10 h-10 bg-[var(--charcoal)] rounded-xl flex items-center justify-center border border-[var(--border-color)] group-hover:border-accent-premier/30 transition-all ${item.color}`}>
                                  {item.icon}
                                </div>
                                <span className="text-sm font-bold text-[var(--text-heading)] group-hover:text-accent-premier transition-colors">{item.title}</span>
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                            <button 
                              onClick={() => {
                                setCurrentPage('solutions');
                                setIsSolutionsOpen(false);
                              }}
                              className="w-full py-2 text-xs font-bold text-center text-[var(--text-muted)] hover:text-accent-premier transition-colors"
                            >
                              Explore All Solutions
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden md:block">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="brand-gradient text-white px-6 h-[44px] rounded-full text-xs font-bold tracking-tight hover:scale-105 transition-all shadow-lg"
              >
                Make an enquiry
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 p-2 hover:text-white transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--deep-dark)] border-b border-[var(--border-color)] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => {
                      if (link.id === 'products') {
                        setIsProductsOpen(!isProductsOpen);
                      } else if (link.id === 'solutions') {
                        setIsSolutionsOpen(!isSolutionsOpen);
                      } else {
                        setCurrentPage(link.id);
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left px-3 py-4 text-base font-bold ${
                      currentPage === link.id ? 'text-accent-premier bg-accent-premier/10' : 'text-[var(--text-body)] hover:bg-[var(--accent-premier)]/5 hover:text-accent-premier'
                    } rounded-lg transition-all`}
                  >
                    {link.label}
                    {(link.id === 'products' || link.id === 'solutions') && (
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${(link.id === 'products' ? isProductsOpen : isSolutionsOpen) ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  {link.id === 'products' && isProductsOpen && (
                    <div className="pl-6 py-2 space-y-2">
                      {PRODUCTS_DATA.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => {
                            setCurrentPage(`prod-${product.id}` as Page);
                            setIsOpen(false);
                            setIsProductsOpen(false);
                          }}
                          className="flex items-center gap-3 w-full text-left p-3 rounded-xl hover:bg-[var(--accent-premier)]/5 text-[var(--text-body)] hover:text-accent-premier transition-all"
                        >
                          {React.cloneElement(product.icon as React.ReactElement, { size: 16 })}
                          <span className="text-sm font-medium">{product.title}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {link.id === 'solutions' && isSolutionsOpen && (
                    <div className="pl-6 py-2 space-y-2">
                      {SOLUTIONS_DATA.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (solution.title.toLowerCase().includes('healthcare')) setCurrentPage('sol-healthcare');
                            else if (solution.title.toLowerCase().includes('education')) setCurrentPage('sol-education');
                            else if (solution.title.toLowerCase().includes('it')) setCurrentPage('sol-it');
                            else if (solution.title.toLowerCase().includes('startups')) setCurrentPage('sol-startups');
                            else setCurrentPage('solutions');
                            setIsOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                          className="flex items-center gap-3 w-full text-left p-3 rounded-xl hover:bg-[var(--accent-premier)]/5 text-[var(--text-body)] hover:text-accent-premier transition-all"
                        >
                          <div className={solution.color}>
                            {React.cloneElement(solution.icon as React.ReactElement, { size: 16 })}
                          </div>
                          <span className="text-sm font-medium">{solution.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
