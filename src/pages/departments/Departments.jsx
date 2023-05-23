import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Departments() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('https://e-commerce-api-express.up.railway.app/api/products');
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div>
      {/* {products?.products?.map((product) => (
        <div key={product._id}>
          <h1>{product.tittle}</h1>
        </div>
      ))} */}
      hola
    </div>
  );
}
