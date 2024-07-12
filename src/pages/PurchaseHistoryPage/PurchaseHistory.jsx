import { useSearchParams } from 'react-router-dom';
import PurchaseHistoryContainer from './PurchaseHistoryContainer';

export default function PurchaseHistory() {
  const [searchParams] = useSearchParams();
  const successfullyPurchased = searchParams.get('success') ?? false;

  return (
    <main
      id="app"
      className="bg-stone-200 flex flex-col content-center grow flex-wrap">
      <section
        id="mensagem-confirmacao"
        className={`text-2xl font-bold text-green-950 py-8 mt-10 bg-green-200 flex justify-center w-1/2 rounded-xl ${
          !successfullyPurchased && 'hidden'
        }`}>
        Sua Compra foi um sucesso
      </section>
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Seu histórico de compras
      </p>
      <PurchaseHistoryContainer />
    </main>
  );
}
