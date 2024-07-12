import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { catalogIndexedById } from "../utils/catalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ id, amount }) {
  const { addToCart, removeFromCart, decreaseUnit } = useContext(CartContext);

  const product = catalogIndexedById[id];
  return (
    <article className="flex bg-stone-100 p-1 border rounded-md relative">
      <img src={product?.image} alt={`Produto ${id}`} className="h-24" />

      <button
        id={`remove-item-${id}`}
        onClick={() => removeFromCart(id)}
        className="text-right text-l fixed top-0 right-2 text-slate-950"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="flex flex-col justify-around mx-2">
        <p className="text-slate-950 text-sm">{product?.name}</p>
        <p className="text-slate-400 text-xs">Tamanho M</p>
        <p className="text-green-700 text-lg">${product?.price}</p>
        <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
          <button
            id={`decrementar-produto-${id}`}
            onClick={() => decreaseUnit(id)}
            className="border border-slate-400 hover:border-slate-900 rounded-md"
          >
            <FontAwesomeIcon icon={faMinus} className="p-1" />
          </button>
          <p id={`quantidade-produto-${id}`} className="p-2 w-8 mx-auto">
            {amount}
          </p>
          <button
            id={`incrementar-produto-${id}`}
            onClick={() => addToCart(id)}
            className="border border-slate-400 hover:border-slate-900 rounded-md"
          >
            <FontAwesomeIcon icon={faPlus} className="p-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
