import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';

interface PrivacyPageProps {
  setCurrentPage: (p: Page) => void;
}

export const PrivacyPage = ({ setCurrentPage }: PrivacyPageProps) => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--charcoal)] rounded-[3rem] p-12 md:p-20 border border-[var(--border-color)]"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-heading)] mb-8">Privacy Policy</h1>
          <p className="text-[var(--text-muted)] mb-12">Last Updated: May 11, 2026</p>

          <div className="space-y-12 text-[var(--text-body)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">1. Introduction</h2>
              <p>
                At Citrus AI Labs, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">2. Information We Collect</h2>
              <p className="mb-4">We collect several types of information from and about users of our Website, including information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-muted)]">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">3. How We Use Your Information</h2>
              <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-muted)]">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">4. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">5. Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-[var(--border-color)]">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-accent-premier font-bold hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
