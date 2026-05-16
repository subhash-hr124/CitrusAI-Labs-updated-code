import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { LogoBackground } from '../components/LogoBackground';
import { Page } from '../types';

interface BlogPageProps {
  setCurrentPage: (p: Page) => void;
  setSelectedPostId: (id: number) => void;
}

export const BlogPage = ({ setCurrentPage, setSelectedPostId }: BlogPageProps) => {
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const otherPosts = BLOG_POSTS.filter(post => !post.featured);

  const handlePostClick = (id: number) => {
    setSelectedPostId(id);
    setCurrentPage('blog-post');
  };

  return (
    <div className="min-h-screen bg-deep-dark">
      {/* Blog Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden border-b border-[var(--border-color)]">
        <LogoBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-display font-bold text-[var(--text-heading)] mb-8 tracking-tighter"
          >
            Insights into the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-accent-premier">AI and Data-Driven Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            Discover deep-dives into LLMs, agentic workflows, data engineering, and the future of intelligent products.
          </motion.p>
          
          <div className="mt-12 max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-accent-premier transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-[var(--charcoal)] border border-[var(--border-color)] group-focus-within:border-accent-premier text-[var(--text-heading)] h-16 rounded-full pl-16 pr-8 text-sm focus:outline-none transition-all shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[var(--dark-blue)] rounded-[3rem] border border-[var(--border-color)] overflow-hidden group shadow-2xl"
            >
              <div className="aspect-[16/10] lg:aspect-auto h-full overflow-hidden relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-2 bg-accent-premier text-black text-xs font-bold rounded-full uppercase tracking-widest shadow-xl">
                    Featured
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-20 flex flex-col items-start">
                 <div className="flex items-center gap-4 text-xs font-bold text-accent-premier uppercase tracking-widest mb-8">
                    <Tag size={14} /> <span>{featuredPost.category}</span>
                 </div>
                 <h2 
                    onClick={() => handlePostClick(featuredPost.id)}
                    className="text-4xl md:text-5xl font-display font-light text-[var(--text-heading)] mb-8 leading-tight group-hover:text-accent-premier transition-colors cursor-pointer"
                 >
                    {featuredPost.title}
                 </h2>
                 <p className="text-[var(--text-body)] text-xl mb-12 opacity-70 leading-relaxed font-light">
                    {featuredPost.excerpt}
                 </p>
                 <div className="flex items-center gap-8 text-[var(--text-muted)] text-sm font-bold mb-12">
                    <div className="flex items-center gap-2"><User size={16} /> <span>{featuredPost.author}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} /> <span>{featuredPost.readTime}</span></div>
                 </div>
                 <button 
                    onClick={() => handlePostClick(featuredPost.id)}
                    className="flex items-center gap-3 text-accent-premier text-xs font-bold uppercase tracking-[0.3em] hover:gap-6 transition-all group/btn"
                 >
                    Read Publication <ArrowRight size={18} />
                 </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid View for More Articles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--text-heading)]">Latest Insights</h2>
            <div className="flex gap-4">
              {['All', 'AI', 'Data', 'Engineering', 'Product'].map((filter) => (
                <button 
                  key={filter} 
                  className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${filter === 'All' ? 'bg-accent-premier text-black' : 'text-slate-400 hover:text-[var(--text-heading)]'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--dark-blue)] rounded-[2.5rem] border border-[var(--border-color)] overflow-hidden flex flex-col group hover:border-accent-premier transition-all shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                   <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                   />
                   <div className="absolute bottom-6 left-6 flex gap-2">
                      <div className="bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
                         {post.category}
                      </div>
                   </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                   <div className="mb-8 flex items-center justify-between text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                   </div>
                   <h3 
                      onClick={() => handlePostClick(post.id)}
                      className="text-2xl font-display font-bold text-[var(--text-heading)] mb-6 group-hover:text-accent-premier transition-colors leading-snug cursor-pointer"
                   >
                      {post.title}
                   </h3>
                   <p className="text-[var(--text-body)] text-sm mb-10 opacity-70 leading-relaxed line-clamp-3">
                      {post.excerpt}
                   </p>
                   <div className="mt-auto pt-8 border-t border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--text-heading)]">{post.author}</span>
                      <button 
                        onClick={() => handlePostClick(post.id)}
                        className="w-10 h-10 bg-[var(--deep-dark)] border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-muted)] group-hover:bg-accent-premier group-hover:text-black group-hover:border-accent-premier transition-all"
                      >
                        <ArrowRight size={18} />
                      </button>
                   </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <button className="px-12 h-16 border-2 border-[var(--border-color)] text-[var(--text-heading)] rounded-full text-xs font-bold uppercase tracking-widest hover:border-accent-premier transition-all">
               Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-accent-premier relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">Stay Informed with Citrus AI Insights</h2>
          <p className="text-xl mb-12 font-medium opacity-80">Join 5k+ technology leaders getting early access to our research and product updates.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your business email" 
              className="flex-1 bg-white px-8 h-16 rounded-full text-sm font-medium focus:outline-none placeholder:text-slate-400 shadow-xl"
            />
            <button className="bg-black text-white px-10 h-16 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              Subscribe Free
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
