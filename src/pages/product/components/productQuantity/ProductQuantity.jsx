import { BodyQuantity, Button, Input } from './ProductQuantity.styled';

export default function ProductQuantity({ quantity, increment, decrement, set }) {
  function handleChange(e) {
    const pattern = /^(?:[1-9]|[1-9][0-9])$/;
    const value = parseInt(e.target.value.replace(/^0+/, ''));

    if (pattern.test(value)) {
      set(value);
    } else {
      set(1);
    }
  }

  function handleClick(e) {
    e.target.select();
  }

  return (
    <BodyQuantity>
      <Button onClick={decrement}>-</Button>
      <Input type='text' value={quantity} onChange={handleChange} onClick={handleClick} />
      <Button onClick={increment}>+</Button>
    </BodyQuantity>
  );
}
