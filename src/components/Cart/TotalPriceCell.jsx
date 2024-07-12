import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { catalogIndexedById } from '../utils/catalog';

function calculateTotalPrice(cartObject) {
  let price = 0;
  for (const itemIndex in cartObject) {
    price += catalogIndexedById[itemIndex].price * cartObject[itemIndex];
  }
  return price;
}

export default function TotalPriceCell() {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));
  useEffect(() => setTotalPrice(calculateTotalPrice(cartItems)), [cartItems]);

  return (
    <section
      id="preco-total"
      className="flex bg-slate-100 p-1 border rounded-md relative text-green-700 justify-evenly">
      <p>Total: </p>
      {`$${totalPrice}`}
    </section>
  );
}
