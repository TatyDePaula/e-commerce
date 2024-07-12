import ProductFilters from './ProductFilters';
import ProductsContainer from './ProductsContainer';
import ProductsFilterContextProvider from '../../contexts/ProductsFilterContext';

export default function MainSection() {
  return (
    <main className="bg-stone-200 flex flex-col grow">
      <ProductsFilterContextProvider>
        <ProductFilters />
        <ProductsContainer />
      </ProductsFilterContextProvider>
    </main>
  );
}
