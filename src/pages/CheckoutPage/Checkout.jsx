import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import FormInput from '../../components/utils/FormInput';
import CartProducts from '../../components/Cart/CartProducts';
import TotalPriceCell from '../../components/Cart/TotalPriceCell';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { addToHistoryAndClearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const completePurchaseHandler = (evt) => {
    evt.preventDefault();
    addToHistoryAndClearCart();
    return navigate('/history?success=true');
  };

  return (
    <main id="app" className="bg-stone-200 h-screen">
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Finalizar Compra
      </p>
      <form
        id="form-dados-usuario"
        className="grid grid-rows-5 grid-cols-3 grid-flow-col gap-4 h-3/4 my-5 px-8">
        <section className="row-span-5 col-span 1 gap-2 bg-neutral-50 rounded-md py-2 px-4 flex flex-col">
          <p className="text-start text-l font-bold text-slate-950 pt-8 p-6">
            Seus Dados
          </p>
          <FormInput
            id="name"
            fieldType="text"
            placeholder="John"
            fieldLabel="Nome"
            required
          />
          <FormInput
            id="surname"
            fieldType="text"
            placeholder="Lira"
            fieldLabel="Sobrenome"
            required
          />
          <FormInput
            id="email"
            fieldType="text"
            placeholder="john.lira@hashtag.com"
            fieldLabel="Email"
            required
          />
          <FormInput
            id="phone"
            fieldType="text"
            placeholder="(21) 99887-7665"
            fieldLabel="Número de contato"
            required
          />
        </section>
        <section
          id="form-dados-pagamento"
          className="row-span-5 col-span 1 gap-2 bg-neutral-50 rounded-md py-2 px-4 flex flex-col">
          <p className="text-start text-l font-bold text-slate-950 pt-8 p-6">
            Pagamento e Entrega
          </p>
          <FormInput
            id="credit-card"
            fieldType="text"
            placeholder="1111 2222 3333 4444"
            fieldLabel="Número do Cartão"
            required
          />
          <div className="flex justify-center gap-3">
            <FormInput
              id="cvv"
              fieldType="text"
              placeholder="987"
              fieldLabel="CVV"
              className="w-1/2"
              required
            />
            <FormInput
              id="expiration-date"
              fieldType="text"
              placeholder="12/99"
              fieldLabel="Validade"
              className="w-1/2"
              required
            />
          </div>
          <FormInput
            id="postal-code"
            fieldType="text"
            placeholder="23456-789"
            fieldLabel="CEP"
            required
          />
          <FormInput
            id="address"
            fieldType="text"
            placeholder="Rua que Sobe e Desce"
            fieldLabel="Endereço"
            required
          />
          <div className="flex justify-center gap-3">
            <FormInput
              id="building-number"
              fieldType="text"
              placeholder="123"
              fieldLabel="Número"
              className="w-1/2"
              required
            />
            <FormInput
              id="apartment-number"
              fieldType="text"
              placeholder="202"
              fieldLabel="Complemento"
              className="w-1/2"
            />
          </div>
        </section>
        <section
          id="carrinho-checkout"
          className="row-span-4 col-span 1 gap-2 bg-neutral-50 rounded-md p-2 overflow-auto">
          <CartProducts isHomePage={false} />
        </section>
        <section
          id="finalizar-compra"
          className="row-span-1 col-span 1 gap-2 bg-neutral-50 rounded-md p-2 flex flex-col justify-evenly content-center">
          <TotalPriceCell />
          <button
            id="finalizar-compra"
            onClick={completePurchaseHandler}
            className="bg-slate-950 text-slate-100 rounded-sm p-1 hover:bg-slate-800 text-center p-2">
            Finalizar Compra
          </button>
        </section>
      </form>
    </main>
  );
}
