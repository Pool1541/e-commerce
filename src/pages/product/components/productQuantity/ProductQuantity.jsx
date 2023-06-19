import { BodyQuantity, Button, Input } from './ProductQuantity.styled';

export default function ProductQuantity() {
  return (
    <BodyQuantity>
      <Button>-</Button>
      <Input type='tel' defaultValue='1' />
      <Button>+</Button>
    </BodyQuantity>
  );
}
