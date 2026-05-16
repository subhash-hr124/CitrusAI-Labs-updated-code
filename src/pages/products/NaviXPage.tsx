import React from 'react';
import { ProductDetailPage } from '../ProductDetailPage';
import { Page } from '../../types';

interface ProductPageProps {
  setCurrentPage: (p: Page) => void;
}

export const NaviXPage = ({ setCurrentPage }: ProductPageProps) => {
  return <ProductDetailPage productId="navix" setCurrentPage={setCurrentPage} />;
};
