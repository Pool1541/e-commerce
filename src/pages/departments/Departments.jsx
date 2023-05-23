import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Departments() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('https://e-commerce-api-express.up.railway.app/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.products.map((product) => (
        <div key={product._id}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
}
