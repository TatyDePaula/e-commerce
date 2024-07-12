import SimpleCartItem from '../../components/utils/SimpleCartItem';

export default function PurchaseElement({ date, purchase }) {
  return (
    <article className="pt-5">
      <p className="my-3 text-l font-bold text-slate-950">{date}</p>
      {Object.keys(purchase).map((productId) => (
        <SimpleCartItem
          id={productId}
          amount={purchase[productId]}
          key={`${date}_${productId}`}
        />
      ))}
    </article>
  );
}
