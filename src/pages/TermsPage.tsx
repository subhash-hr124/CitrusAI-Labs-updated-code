import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';

interface TermsPageProps {
  setCurrentPage: (p: Page) => void;
}

export const TermsPage = ({ setCurrentPage }: TermsPageProps) => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--charcoal)] rounded-[3rem] p-12 md:p-20 border border-[var(--border-color)]"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-heading)] mb-8">Terms of Service</h1>
          <p className="text-[var(--text-muted)] mb-12">Last Updated: May 11, 2026</p>

          <div className="space-y-12 text-[var(--text-body)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Citrus AI Labs website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">2. Use License</h2>
              <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Citrus AI Labs' website for personal, non-commercial transitory viewing only.</p>
              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[var(--text-muted)]">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                <li>Attempt to decompile or reverse engineer any software contained on Citrus AI Labs' website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">3. Disclaimer</h2>
              <p>
                The materials on Citrus AI Labs' website are provided on an 'as is' basis. Citrus AI Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">4. Limitations</h2>
              <p>
                In no event shall Citrus AI Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Citrus AI Labs' website, even if Citrus AI Labs or a Citrus AI Labs authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
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
