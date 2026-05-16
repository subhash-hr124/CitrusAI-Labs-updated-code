import React from 'react';
import { 
  Dna, Heart, LayoutGrid, Palette, BarChart3, Compass, 
  GraduationCap, Stethoscope, Building2, Rocket 
} from 'lucide-react';
import { ProductData, SolutionData, CaseStudy, TechStackItem, BlogPost } from './types';

export const PRODUCTS_DATA: ProductData[] = [
  {
    id: "medresearch",
    title: "MedResearch",
    tagline: "AI-Native Research Intelligence for Life Sciences",
    desc: "MedResearch is the AI-native research intelligence platform for life sciences teams — combining literature, clinical trials, and knowledge graphs into one powerful copilot, replacing legacy tools at a fraction of the cost.",
    icon: <Dna size={40} className="text-electric-blue" />,
    features: [
      { title: "AI Research Copilot", desc: "Ask anything — get precise, cited answers across papers, trials, and biomedical data." },
      { title: "Hybrid Smart Search", desc: "Combines semantic, keyword, and knowledge graph search for deeper discovery." },
      { title: "Clinical Trial Intelligence", desc: "Analyze trial landscapes, endpoints, competitors, and gaps in one place." },
      { title: "Biomedical Knowledge Graph", desc: "Understand drug–target–biomarker relationships visually and contextually." },
      { title: "Live Data Integrations", desc: "Access real-time data from PubMed, ClinicalTrials.gov, and more." },
      { title: "7 AI Output Formats", desc: "Convert insights into slides, mind maps, reports, and tables instantly." }
    ],
    howItWorks: [
      { step: "01", title: "Ingest", desc: "Connect PubMed, ClinicalTrials, and internal R&D databases." },
      { step: "02", title: "Analyze", desc: "Our RAG engine processes documents for semantic meaning and relationships." },
      { step: "03", title: "Synthesize", desc: "Interact with the research copilot to generate cited insights and summaries." }
    ],
    stats: [
      { label: "Search Efficiency", val: "10x", desc: "Faster than traditional literature reviews" },
      { label: "Data Sources", val: "35M+", desc: "Citations and full-text papers indexed" },
      { label: "Accuracy Rate", val: "99%", desc: "Verified cited sources for all AI responses" }
    ],
    useCases: [
      { title: "Drug Discovery", desc: "Identify novel drug-target relationships using biomedical knowledge graphs." },
      { title: "Clinical Strategy", desc: "Optimise trial endpoints by analyzing historical competitor performance." }
    ]
  },
  {
    id: "mindbloom",
    title: "MindBloom AI",
    tagline: "Holistic Mental Wellness Ecosystem",
    desc: "MindBloom AI is designed to bridge the gap between physical health and emotional resilience. It combines advanced Generative AI, gamified habit tracking, and anonymous community support.",
    icon: <Heart size={40} className="text-accent-premier" />,
    features: [
      { title: "AI Vibe Coach", desc: "24/7 Empathetic listening using CBT & DBT frameworks for stress management." },
      { title: "Gamified Bloom Tracker", desc: "Watch your digital garden grow as you maintain wellness habits and streaks." },
      { title: "Anonymous Peer Circles", desc: "Safe, moderated support groups for anxiety, burnout, and connectivity." },
      { title: "Biometric Integration", desc: "Syncs with Oura, Google Fit, and Apple Health for a unified health view." },
      { title: "Smart Journaling", desc: "Sentiment analysis detects emotional tones and provides AI-driven reflections." },
      { title: "Privacy First", desc: "AES-256 encryption and a strict no-sell policy for your emotional data." }
    ],
    howItWorks: [
      { step: "01", title: "Sync", desc: "Connect your wearables to feed biometric resilience data into the bloom engine." },
      { step: "02", title: "Converse", desc: "Chat with Nova, your empathetic AI coach, for real-time emotional support." },
      { step: "03", title: "Grow", desc: "Complete daily wellness missions to cultivate your personalsied digital garden." }
    ],
    stats: [
      { label: "User Engagement", val: "84%", desc: "Retention rate for active monthly users" },
      { label: "Stress Reduction", val: "30%", desc: "Average reported decrease in anxiety levels" },
      { label: "Safe Spaces", val: "1k+", desc: "Moderated anonymous support circles" }
    ],
    useCases: [
      { title: "Employee Wellness", desc: "Provide staff with 24/7 anonymous emotional resilience tools." },
      { title: "Post-Clinical Support", desc: "Bridging the gap between therapy sessions with AI-guided CBT." }
    ]
  },
  {
    id: "utilityhub",
    title: "UtilityHub",
    tagline: "Your Ultimate Productivity Toolkit",
    desc: "A versatile, all-in-one productivity suite designed to simplify daily digital tasks. From text manipulation to advanced AI-powered image generation and analysis.",
    icon: <LayoutGrid size={40} className="text-neon-purple" />,
    features: [
      { title: "AI-Powered Intelligence", desc: "Text assistants, image generators, and OCR tools powered by Gemini." },
      { title: "Developer & Data Tools", desc: "JSON formatters, JWT decoders, SQL tools, and UUID generators." },
      { title: "Content Processing", desc: "Grammar fixers, case converters, and real-time Markdown previews." },
      { title: "Design & Visuals", desc: "Palette generators, contrast checkers, and QR code builders." },
      { title: "Calculators & Converters", desc: "Unit, storage, and business day calculators for daily efficiency." },
      { title: "PDF Utilities", desc: "Extract text, inspect metadata, and convert PDFs to AI mind maps." }
    ],
    howItWorks: [
      { step: "01", title: "Select", desc: "Choose from over 50+ specialized tools across categories." },
      { step: "02", title: "Process", desc: "All data is processed instantly with zero persistent storage for privacy." },
      { step: "03", title: "Implement", desc: "Copy, export, or pipe results directly into your workflow." }
    ],
    stats: [
      { label: "Total Tools", val: "50+", desc: "Micro-apps in a single unified interface" },
      { label: "Privacy Rating", val: "AAA", desc: "Client-side processing where possible" },
      { label: "Load Speed", val: "<1s", desc: "Instant-on lightweight architecture" }
    ],
    useCases: [
      { title: "Developer Workflows", desc: "Fast JSON manipulation and JWT debugging without leaving the tab." },
      { title: "Content Creation", desc: "AI-driven text analysis and grammar correction for writers." }
    ]
  },
  {
    id: "artistry",
    title: "Artistry",
    tagline: "Where Imagination Becomes a Digital Masterpiece",
    desc: "An immersive, AI-powered creative academy for children. Artistry provides a safe playground where kids can write stories, direct videos, and experiment with digital art.",
    icon: <Palette size={40} className="text-electric-blue" />,
    features: [
      { title: "AI Story Studio", desc: "Collaborative writing with dynamic narration and expressive AI voices." },
      { title: "The Academy Labs", desc: "Digital sculpting and style exploration inspired by the masters." },
      { title: "Magic Motion", desc: "Transform static illustrations into high-quality cinematic short videos." },
      { title: "Curiosity Grounding", desc: "Integrated Google Search grounding provides real-world educational facts." },
      { title: "Professional Visuals", desc: "Choose between fast 'Flash' ideas and high-fidelity 'Pro' 1K renders." },
      { title: "Smart Moderation", desc: "Multi-layer AI safety filters ensure age-appropriate content at all times." }
    ],
    howItWorks: [
      { step: "01", title: "Dream", desc: "Describe a world, character, or story through voice or text." },
      { step: "02", title: "Create", desc: "Collaborate with Artistry AI to generate scenes, art, and music." },
      { step: "03", title: "Showcase", desc: "Export your safe-moderated cinematic shorts and art galleries." }
    ],
    stats: [
      { label: "Safety Score", val: "100%", desc: "Human-reviewed moderation thresholds" },
      { label: "Creative Output", val: "500k+", desc: "Original stories created by students" },
      { label: "Voice Options", val: "12", desc: "Expressive AI narrators for stories" }
    ],
    useCases: [
      { title: "Classroom Learning", desc: "Engagement tools for creative writing and digital literacy." },
      { title: "Home Discovery", desc: "Safe, ad-free creative play for children aged 8-14." }
    ]
  },
  {
    id: "lighten",
    title: "lighten.ai",
    tagline: "The Conversational AI Data Analyst",
    desc: "A production-grade analytics platform that allows users to interact with data using natural language, generate visualizations instantly, and build dashboards without SQL.",
    icon: <BarChart3 size={40} className="text-accent-premier" />,
    features: [
      { title: "Nova: AI Copilot", desc: "Gemini-integrated analysis that understands complex natural language queries." },
      { title: "Clarity Engine", desc: "Automatically determines the most effective chart type for your data." },
      { title: "Dashboard Builder", desc: "High-density widgets and customizable layouts for executive overviews." },
      { title: "Universal Connections", desc: "Connect directly to PostgreSQL or upload static CSV files with live syncing." },
      { title: "Insight Memories", desc: "Save critical findings and summaries for persistent contextual awareness." },
      { title: "Enterprise Foundation", desc: "Secure authentication and modern UI built for high-performance analytics." }
    ],
    howItWorks: [
      { step: "01", title: "Connect", desc: "Hook up your SQL database or drop a CSV file into the analyst portal." },
      { step: "02", title: "Question", desc: "Ask 'Show me churn vs revenue by region' in natural language." },
      { step: "03", title: "Visualize", desc: "Get instant interactive charts and automated executive summaries." }
    ],
    stats: [
      { label: "Query Speed", val: "2s", desc: "Average time to generate a complex SQL chart" },
      { label: "Data Literacy", val: "95%", desc: "User self-sufficiency in generating reports" },
      { label: "ROI", val: "40%", desc: "Reduction in developer-led report generation" }
    ],
    useCases: [
      { title: "Sales Ops", desc: "Real-time pipeline analysis for managers without technical background." },
      { title: "Product Analytics", desc: "Track feature engagement trends through simple conversation." }
    ]
  },
  {
    id: "navix",
    title: "NaviX",
    tagline: "Navigate Your Future with AI",
    desc: "An AI career guidance platform helping students bridge the gap between campus and career with personalized roadmaps and interview prep.",
    icon: <Compass size={40} className="text-neon-purple" />,
    features: [
      { title: "Resume Analyzer", desc: "Get AI scores and suggestions for keywords, formatting, and impact." },
      { title: "AI Career Coach", desc: "Personalized career path suggestions and skill roadmaps based on your goals." },
      { title: "Interview Cracker", desc: "Role-based mock interviews with AI feedback and improvement tips." },
      { title: "Skill Gap Analyzer", desc: "Identify missing skills like System Design or APIs for your target role." },
      { title: "Smart Job Matching", desc: "Personalized job and internship recommendations based on your profile." },
      { title: "Campus Feed", desc: "Placement discussions, interview experiences, and community groups." }
    ],
    howItWorks: [
      { step: "01", title: "Profile", desc: "Upload your resume or sync your LinkedIn profile." },
      { step: "02", title: "Assess", desc: "Identify skill gaps and take AI-guided mock interviews." },
      { step: "03", title: "Land", desc: "Get matched with jobs tailored to your verified skill set." }
    ],
    stats: [
      { label: "Placement Rate", val: "65%", desc: "Average increase in selection for NaviX users" },
      { label: "Mock Interviews", val: "10k+", desc: "Simulated role-based sessions monthly" },
      { label: "Skills Indexed", val: "2.5k", desc: "Different professional skills analyzed" }
    ],
    useCases: [
      { title: "University Portals", desc: "Provide placement cells with automated career coaching at scale." },
      { title: "Bootstrap Professionals", desc: "Self-guided skill upgrading for early-career developers." }
    ]
  }
];

export const SOLUTIONS_DATA: SolutionData[] = [
  { title: "Education & EdTech", icon: <GraduationCap size={20} />, color: "text-electric-blue" },
  { title: "Healthcare", icon: <Stethoscope size={20} />, color: "text-accent-premier" },
  { title: "IT & Software Services", icon: <Building2 size={20} />, color: "text-neon-purple" },
  { title: "Startups & Product Companies", icon: <Rocket size={20} />, color: "text-electric-blue" }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "AI Research Platform",
    client: "Global Pharma Hub",
    results: "70% Faster Discovery",
    desc: "Built a neural search engine for clinical trials and research papers, enabling scientists to find critical links in seconds.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Wellness Ecosystem",
    client: "MindBloom AI",
    results: "200k+ Active Users",
    desc: "Engineered a gamified emotional resilience platform using Generative AI for personalized daily coaching.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Enterprise Analytics",
    client: "FinTech Scaleup",
    results: "45% Reduction in Churn",
    desc: "Implemented a conversational data analyst that predicted customer churn patterns with 90% accuracy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: "Gemini 1.5 Pro", category: "GenAI Models" },
  { name: "LangChain", category: "AI Orchestration" },
  { name: "Pinecone", category: "Vector Database" },
  { name: "Google BigQuery", category: "Data Warehouse" },
  { name: "Snowflake", category: "Cloud Analytics" },
  { name: "Apache Spark", category: "Big Data Processing" },
  { name: "dbt (data build tool)", category: "Data Modeling" },
  { name: "PyTorch", category: "Neural Networks" },
  { name: "Redis", category: "Real-time Data" },
  { name: "GraphQL", category: "Unified Data API" },
  { name: "PostgreSQL", category: "Reliable Storage" },
  { name: "Docker", category: "AI Infrastructure" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Education: Beyond Personalized Learning",
    excerpt: "Explore how regenerative AI is moving beyond simple recommendation engines to create truly autonomous educational companions.",
    category: "EdTech",
    author: "Dr. Elena Vance",
    date: "May 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: 2,
    title: "Scaling Data Engineering for Global Pharma R&D",
    excerpt: "How MedResearch handles petabytes of clinical trial data while maintaining zero-trust security and sub-second query latency.",
    category: "Data Engineering",
    author: "Marcus Chen",
    date: "May 08, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d999e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "The Psychology of AI-Human Interaction in Wellness",
    excerpt: "Designing MindBloom AI required a deep understanding of empathy in generative voices. Here's what we learned.",
    category: "Mental Health",
    author: "Sarah Jenkins",
    date: "May 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518199266791-5373a6894587?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Vite 6 and React 19: The New Standard for AI Dashboards",
    excerpt: "Why we migrated our entire analytics suite to the latest stack and the 40% performance gains we observed.",
    category: "Engineering",
    author: "Arjun Rao",
    date: "May 02, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Ethical AI: Moderation in Creative Platforms for Kids",
    excerpt: "How Artistry implements multi-layer safety filters that encourage creativity without compromising on child safety.",
    category: "Product",
    author: "Lisa Tompson",
    date: "April 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "The Rise of the Conversational Analyst",
    excerpt: "Will SQL become a legacy skill? Analyzing the impact of natural language queries on business intelligence teams.",
    category: "Analytics",
    author: "David Miller",
    date: "April 25, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];
