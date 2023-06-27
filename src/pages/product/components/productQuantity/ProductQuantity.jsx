import { useState } from 'react';
import { BodyQuantity, Button, Input } from './ProductQuantity.styled';

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    const pattern = /^[0-9]+$/;
    const value = e.target.value.replace(/^0+/, '');

    if (pattern.test(value)) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  }

  return (
    <BodyQuantity>
      <Button onClick={() => setQuantity((prev) => prev - 1)}>-</Button>
      <Input type='text' value={quantity} onChange={handleChange} />
      <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
    </BodyQuantity>
  );
}
