import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { BagIcon } from '../../assets/icons';
import { Slide, SlideImage, SlidePrice } from '../../components/DepaSlider/DepaSlide.styled';

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
    <>
      {products.products.map((product) => (
        <Slide key={product._id}>
          <h3>{product.title}</h3>
          <SlideImage>
            <img src={product.image} alt={product.title} />
          </SlideImage>
          <SlidePrice>
            <span>{product.price}</span>
          </SlidePrice>
          <button>
            <span>Add</span>
            <hr />
            <BagIcon />
          </button>
        </Slide>
      ))}
    </>
  );
}
