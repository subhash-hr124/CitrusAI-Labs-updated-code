import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Share2, Twitter, Linkedin, Copy } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { LogoBackground } from '../components/LogoBackground';
import { Page } from '../types';

interface BlogPostDetailPageProps {
  postId: number;
  setCurrentPage: (p: Page) => void;
}

export const BlogPostDetailPage = ({ postId, setCurrentPage }: BlogPostDetailPageProps) => {
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-dark">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Post not found</h2>
          <button 
            onClick={() => setCurrentPage('blog')}
            className="text-accent-premier font-bold uppercase tracking-widest text-sm"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-dark pt-24 pb-32">
      {/* Scroll indicator or progress bar could be here */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setCurrentPage('blog')}
          className="flex items-center gap-2 text-[10px] font-bold text-accent-premier uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={14} /> Back to Insights
        </motion.button>

        <article>
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 text-xs font-bold text-accent-premier uppercase tracking-[0.4em] mb-8">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-10 leading-[0.9] tracking-tighter lowercase">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-[var(--text-muted)] text-sm font-bold border-b border-white/5 pb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-premier/20 flex items-center justify-center text-accent-premier">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-white block">{post.author}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Principal Research Engineer</div>
                </div>
              </div>
              <div className="flex items-center gap-2"><Clock size={16} /> <span>{post.readTime}</span></div>
              <div className="flex items-center gap-2"><span>{post.date}</span></div>
            </div>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16 rounded-[3rem] overflow-hidden border border-white/10 shadow-huge shadow-black/50"
          >
            <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover grayscale opacity-80" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tighter prose-headings:lowercase prose-p:text-[var(--text-body)] prose-p:leading-relaxed prose-strong:text-white prose-blockquote:border-accent-premier prose-blockquote:bg-accent-premier/5 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic"
            >
              <p className="text-2xl font-light text-white mb-10 leading-relaxed italic border-l-2 border-accent-premier pl-8 bg-accent-premier/5 py-8 rounded-r-3xl">
                {post.excerpt}
              </p>

              <p>
                In the rapidly evolving landscape of artificial intelligence, we are witnessing a paradigm shift from reactive tools to proactive agents. At Citrus AI Labs, our mission has always been to bridge the gap between complex data processing and human-centric utility. This publication dives deep into the architectural decisions and research breakthroughs that are defining this new era.
              </p>

              <h2>The Neural Architecture of Tomorrow</h2>
              <p>
                Building production-grade AI involves more than just prompts. It requires a robust "orchestration layer" that can handle context, state, and memory. We've found that integrating vector databases with real-time semantic caching reduces latency by up to 40% while significantly improving accuracy.
              </p>

              <ul>
                <li><strong>Contextual Awareness:</strong> How models retain information across sessions.</li>
                <li><strong>Agentic Reasoning:</strong> Moving from single-step tasks to multi-stage objective completion.</li>
                <li><strong>Zero-Trust Security:</strong> Protecting enterprise data at every inference point.</li>
              </ul>

              <blockquote>
                "The real power of AI isn't in replacing human judgment, but in amplifying it with precise, real-time intelligence that were previously impossible to compute."
              </blockquote>

              <h2>Solving the Hallucination Problem</h2>
              <p>
                Retrieval-Augmented Generation (RAG) remains the gold standard for accuracy. By grounding our outputs in verified data sources—whether it's clinical trials for MedResearch or financial logs for Lighten—we ensure that every AI response is cited and verifiable.
              </p>

              <p>
                As we look ahead, the integration of multi-modal reasoning will allow our products to not just process text, but understand visuals, code, and structured data in a single unified flow.
              </p>
            </motion.div>

            {/* Sidebar / Sharing */}
            <aside className="space-y-12">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Share Article</h4>
                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-accent-premier hover:text-black transition-all group">
                    <Twitter size={18} />
                    <span className="text-xs font-bold">Twitter</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-accent-premier hover:text-black transition-all group">
                    <Linkedin size={18} />
                    <span className="text-xs font-bold">LinkedIn</span>
                  </button>
                  <button className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-accent-premier hover:text-black transition-all group">
                    <Copy size={18} />
                    <span className="text-xs font-bold">Copy Link</span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Category</h4>
                <div className="inline-block px-4 py-2 bg-accent-premier/10 border border-accent-premier/20 rounded-full text-accent-premier text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="mt-32 pt-20 border-t border-white/10 flex items-center justify-between">
           <button 
             onClick={() => setCurrentPage('blog')}
             className="text-[var(--text-muted)] hover:text-accent-premier transition-colors text-xs font-bold flex items-center gap-2"
           >
             <ArrowLeft size={16} /> Previous Article
           </button>
           <button 
             onClick={() => setCurrentPage('blog')}
             className="text-[var(--text-muted)] hover:text-accent-premier transition-colors text-xs font-bold flex items-center gap-2"
           >
             Next Article <ArrowLeft size={16} className="rotate-180" />
           </button>
        </div>
      </div>
    </div>
  );
};
