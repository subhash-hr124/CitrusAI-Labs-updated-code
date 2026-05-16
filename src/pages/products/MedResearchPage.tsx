import React from 'react';
import { ProductDetailPage } from '../ProductDetailPage';
import { Page } from '../../types';

interface ProductPageProps {
  setCurrentPage: (p: Page) => void;
}

export const MedResearchPage = ({ setCurrentPage }: ProductPageProps) => {
  return <ProductDetailPage productId="medresearch" setCurrentPage={setCurrentPage} />;
};
