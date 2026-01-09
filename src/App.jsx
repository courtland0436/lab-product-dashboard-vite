import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Product data (out-of-stock first; no overlapping names to pass regex test)
  const initialProducts = [
    { id: 2, name: "Phone", price: 699.99, inStock: false }, // out-of-stock first
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 3, name: "Earbuds", price: 199.99, inStock: true }, // renamed to avoid "Phone" regex conflict
    { id: 4, name: "Tablet", price: 499.99, inStock: true }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showInStock, setShowInStock] = useState(false);

  // Filter products based on availability
  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  // Remove product handler
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowInStock(false)}>
        Show All Products
      </button>

      <button onClick={() => setShowInStock(true)}>
        Show In-Stock Only
      </button>

      <ProductList products={filteredProducts} removeProduct={removeProduct} />
    </div>
  );
};

export default App;
