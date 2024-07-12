import React, { createContext, useState, useEffect } from 'react';
import { catalog } from '../components/utils/catalog';

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of catalog) {
    cart[product.id] = 0;
  }
  return cart;
};

let localStorageCart = localStorage.getItem('cart');
if (localStorageCart) {
  localStorageCart = JSON.parse(localStorageCart);
}
let localStoragePurchaseHistory = localStorage.getItem('history');
if (localStoragePurchaseHistory) {
  localStoragePurchaseHistory = JSON.parse(localStoragePurchaseHistory);
}

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorageCart || getDefaultCart()
  );
  const [purchaseHistoryItems, setPurchaseHistoryItems] = useState(
    localStoragePurchaseHistory || []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(purchaseHistoryItems));
  }, [purchaseHistoryItems]);

  const addToCart = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] + 1,
    }));
    console.log(cartItems);
  };
  const decreaseUnit = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] - 1,
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: 0 });
  };
  const addToHistoryAndClearCart = () => {
    const historyEntry = {
      date: new Date().toLocaleString(),
      purchase: cartItems,
    };
    setPurchaseHistoryItems((prevValue) => [historyEntry, ...prevValue]);
    setCartItems(getDefaultCart());
  };

  const toggleCartOpen = () => setIsCartOpen((isCartOpen) => !isCartOpen);

  function getTotalAmountOfItems() {
    let amount = 0;
    for (const item in cartItems) {
      amount += cartItems[item];
    }
    return amount;
  }
  const contextValue = {
    cartItems,
    isCartOpen,
    purchaseHistoryItems,
    addToCart,
    decreaseUnit,
    removeFromCart,
    getTotalAmountOfItems,
    toggleCartOpen,
    addToHistoryAndClearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
