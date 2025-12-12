import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = (item) => setItems((s) => [...s, item]);
  const remove = (id) => setItems((s) => s.filter((it) => it.id !== id));
  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
