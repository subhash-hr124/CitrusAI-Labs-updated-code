import React from 'react';
import { ProductDetailPage } from '../ProductDetailPage';
import { Page } from '../../types';

interface ProductPageProps {
  setCurrentPage: (p: Page) => void;
}

export const MindBloomPage = ({ setCurrentPage }: ProductPageProps) => {
  return <ProductDetailPage productId="mindbloom" setCurrentPage={setCurrentPage} />;
};
