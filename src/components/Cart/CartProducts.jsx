import CartItem from './CartItem';
import SimpleCartItem from '../utils/SimpleCartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function CartProducts({ isHomePage = true }) {
  const { cartItems } = useContext(CartContext);

  const cartItemsArray = [];
  for (const item in cartItems) {
    cartItemsArray.push({ id: Number(item), amount: cartItems[item] });
  }

  return (
    <section
      id="lista-produtos"
      className={`flex flex-col justify-start overflow-auto gap-2 ${
        isHomePage && 'h-3/5'
      }`}>
      {cartItemsArray.map((product) => {
        if (product.amount)
          return isHomePage ? (
            <CartItem {...product} key={`key_${product.id}`} />
          ) : (
            <SimpleCartItem {...product} key={`key_${product.id}`} />
          );
      })}
    </section>
  );
}
