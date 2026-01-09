import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  if (products.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
