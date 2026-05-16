import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { Page } from '../types';

interface CookieConsentProps {
  setCurrentPage: (p: Page) => void;
}

export const CookieConsent = ({ setCurrentPage }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-4 right-4 md:right-8 md:left-auto md:max-w-md z-50"
        >
          <div className="bg-[var(--charcoal)] border border-[var(--border-color)] rounded-3xl p-6 shadow-2xl backdrop-blur-xl bg-opacity-95">
            <div className="flex items-start gap-4">
              <div className="bg-accent-premier/20 p-3 rounded-2xl shrink-0">
                <Cookie className="text-accent-premier" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-[var(--text-heading)]">Cookie Preferences</h3>
                  <button onClick={() => setIsVisible(false)} className="text-[var(--text-muted)] hover:text-white">
                    <X size={18} />
                  </button>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                  <button 
                    onClick={() => setCurrentPage('privacy')}
                    className="ml-1 text-accent-premier hover:underline text-xs"
                  >
                    Privacy Policy
                  </button>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-accent-premier text-black py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-[var(--deep-dark)] border border-[var(--border-color)] text-[var(--text-heading)] py-3 rounded-xl font-bold text-sm hover:bg-[var(--border-color)] transition-all"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
