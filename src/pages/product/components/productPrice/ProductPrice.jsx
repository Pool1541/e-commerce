import { formatCurrency } from '../../../../utils';
import { ProductPriceContainer, Prices, Discount, PaymentMethods } from './ProductPrice.styled';

export default function ProductPrice({ product }) {
  return (
    <ProductPriceContainer>
      <Prices>
        <span>Precio exclusivo web</span>
        <span>{formatCurrency(product.price)}</span>
        {product.discount >= 1 && <span>{formatCurrency(product.fullPrice)}</span>}
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
