import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Page } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  setCurrentPage: (p: Page) => void;
}

export const Footer = ({ setCurrentPage }: FooterProps) => {
  return (
    <footer className="bg-[var(--deep-dark)] border-t border-[var(--border-color)] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="text-[var(--text-heading)]" />
            </div>
            <p className="text-[var(--text-muted)] text-lg max-w-md leading-relaxed mb-10">
              Ready to revolutionise your business communications with unrivalled speed? Let's turn your idea into an intelligent product.
            </p>
            <div className="max-w-sm">
              <h5 className="text-xs font-bold uppercase tracking-widest text-accent-premier mb-4">Join our newsletter</h5>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-[var(--charcoal)] border border-[var(--border-color)] rounded-xl px-4 text-xs focus:outline-none focus:border-accent-premier transition-all"
                />
                <button className="bg-accent-premier text-black px-6 h-12 rounded-xl font-bold text-xs hover:scale-105 transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-[var(--text-heading)] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Solutions', 'Services', 'About Us', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase().replace(' ', '') as Page)}
                    className="text-[var(--text-muted)] hover:text-accent-premier transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[var(--text-heading)] mb-6">Contact</h4>
            <ul className="space-y-4 text-[var(--text-muted)]">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-premier" />
                <span>info@citrusailabs.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-premier" />
                <span>+91 9949890977</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent-premier" />
                <span className="text-sm">T-Hub, Knowledge City, Serilingampally, Hyderabad, Telangana 500081</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-[var(--text-muted)] text-center md:text-left">
          <p>© 2026 Citrus AI Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="hover:text-accent-premier transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="hover:text-accent-premier transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
