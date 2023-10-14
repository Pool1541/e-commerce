import { formatCurrency } from '../../../../utils';
import { ProductPriceContainer, Prices, Discount, PaymentMethods } from './ProductPrice.styled';

export default function ProductPrice({ product }) {
  const priceWithDiscount = product.price - (product.price * product.discount) / 100;
  return (
    <ProductPriceContainer>
      <Prices>
        <span>Precio exclusivo web</span>
        <span>{formatCurrency(priceWithDiscount)}</span>
        {product.discount >= 1 && <span>{formatCurrency(product.price)}</span>}
      </Prices>
      {product.discount >= 1 && (
        <Discount>
          <span>-{product.discount} %</span>
        </Discount>
      )}

      <PaymentMethods>
        <span>Todos los medios de pago</span>
      </PaymentMethods>
    </ProductPriceContainer>
  );
}
