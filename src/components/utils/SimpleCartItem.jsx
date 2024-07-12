import { catalogIndexedById } from './catalog';

export default function SimpleCartItem({ id, amount }) {
  const product = catalogIndexedById[id];
  return (
    <article className="flex bg-stone-100 p-1 rounded-md border relative">
      <img src={product?.image} alt={`Produto ${id}`} className="h-24" />
      <div className="flex flex-col justify-around mx-2">
        <p className="text-slate-950 text-sm">{product?.name}</p>
        <p className="text-slate-400 text-xs">Tamanho M</p>
        <p className="text-green-700 text-lg">${product?.price}</p>
        <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
          <p id={`quantidade-produto-${id}`} className="p-2 w-8 mx-auto">
            {amount}
          </p>
        </div>
      </div>
    </article>
  );
}
