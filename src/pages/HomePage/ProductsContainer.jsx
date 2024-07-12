import ProductCard from './ProductCard';
import { catalog } from '../../components/utils/catalog';
import { useContext } from 'react';
import { ProductsFilterContext } from '../../contexts/ProductsFilterContext';

export default function ProductsContainer() {
  const { femaleGenderFilter } = useContext(ProductsFilterContext);
  return (
    <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
      {(femaleGenderFilter !== null
        ? catalog.filter((product) => product.feminine === femaleGenderFilter)
        : catalog
      ).map((produto) => (
        <ProductCard key={`produto_${produto.id}`} {...produto} />
      ))}
    </section>
  );
}
