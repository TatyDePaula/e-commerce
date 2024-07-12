import PurchaseElement from './PurchaseElement';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function PurchaseHistoryContainer() {
  const { purchaseHistoryItems } = useContext(CartContext);
  return (
    <section id="historico-compras" className="flex flex-col">
      {purchaseHistoryItems.map((purchaseHistoryObject, idx) => (
        <PurchaseElement {...purchaseHistoryObject} key={`purchase_${idx}`} />
      ))}
    </section>
  );
}
