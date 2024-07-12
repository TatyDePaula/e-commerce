import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

export default function UserButtons() {
  const { cartItems, getTotalAmountOfItems, toggleCartOpen } =
    useContext(CartContext);
  const [amountOfItems, setAmountOfItems] = useState(getTotalAmountOfItems());
  useEffect(() => {
    setAmountOfItems(getTotalAmountOfItems());
  }, [cartItems]);

  return (
    <div>
      <button className="px-2 relative" onClick={toggleCartOpen}>
        <FontAwesomeIcon icon={faBagShopping} />
        <div
          id="indicador-carrinho"
          className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900 ${
            !amountOfItems && 'hidden'
          }`}>
          {amountOfItems}
        </div>
      </button>
      <a className="px-2">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
}
