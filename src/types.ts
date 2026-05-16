import React from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'products' | 'product' | 'solutions' | 'about' | 'blog' | 'blog-post' | 'contact' | 
  'prod-medresearch' | 'prod-mindbloom' | 'prod-utilityhub' | 'prod-artistry' | 'prod-lighten' | 'prod-navix' |
  'sol-healthcare' | 'sol-education' | 'sol-it' | 'sol-startups' | 'services' | 'careers' | 'privacy' | 'terms';

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProductStat {
  label: string;
  val: string;
  desc: string;
}

export interface ProductUseCase {
  title: string;
  desc: string;
}

export interface ProductData {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  features: ProductFeature[];
  howItWorks: ProductStep[];
  stats: ProductStat[];
  useCases: ProductUseCase[];
}

export interface SolutionData {
  title: string;
  icon: React.ReactNode;
  color: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  results: string;
  desc: string;
  image: string;
}

export interface TechStackItem {
  name: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}
