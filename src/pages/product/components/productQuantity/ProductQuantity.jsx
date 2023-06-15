import { Button, Input } from './ProductQuantity.styled';

export default function ProductQuantity() {
  return (
    <>
      <Button>-</Button>
      <Input type='number' value='1' />
      <Button>+</Button>
    </>
  );
}
