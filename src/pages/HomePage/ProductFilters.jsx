import { useContext } from 'react';
import { ProductsFilterContext } from '../../contexts/ProductsFilterContext';

export default function ProcuctFilters() {
  const { setFemaleGenderFilter } = useContext(ProductsFilterContext);

  return (
    <section className="flex justify-center items-center py-8">
      <input
        type="radio"
        name="filter-selection"
        id="filter-0"
        className="hidden"
        onClick={() => setFemaleGenderFilter(null)}
      />
      <label
        htmlFor="filter-0"
        className="rounded-s-lg bg-indigo-950 hover:bg-indigo-800 focus:bg-indigo-800 p-2 text-sm text-slate-100 cursor-pointer">
        Todos
      </label>
      <input
        type="radio"
        name="filter-selection"
        id="filter-1"
        className="hidden"
        onClick={() => setFemaleGenderFilter(false)}
      />
      <label
        htmlFor="filter-1"
        className="rounded-none bg-indigo-950 hover:bg-indigo-800 focus:bg-indigo-800 p-2 text-sm text-slate-100 cursor-pointer">
        Masculino
      </label>
      <input
        type="radio"
        name="filter-selection"
        id="filter-2"
        className="hidden"
        onClick={() => setFemaleGenderFilter(true)}
      />
      <label
        htmlFor="filter-2"
        dir="rtl"
        className="rounded-s-lg bg-indigo-950 hover:bg-indigo-800 focus:bg-indigo-800 p-2 text-sm text-slate-100 cursor-pointer">
        Feminino
      </label>
    </section>
  );
}
