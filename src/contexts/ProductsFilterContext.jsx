import { createContext, useState } from 'react';

export const ProductsFilterContext = createContext(null);

export default function ProductsFilterContextProvider({ children }) {
  const [femaleGenderFilter, setFemaleGenderFilter] = useState(null);

  const contextValue = {
    femaleGenderFilter,
    setFemaleGenderFilter,
  };

  return (
    <ProductsFilterContext.Provider value={contextValue}>
      {children}
    </ProductsFilterContext.Provider>
  );
}
