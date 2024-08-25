import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [boughtStocks, setBoughtStocks] = useState([]);

  const handleBuyStock = (stockDetails) => {
    setBoughtStocks((prevStocks) => [...prevStocks, stockDetails]);
  };

  return (
    <StockContext.Provider value={{ boughtStocks, handleBuyStock }}>
      {children}
    </StockContext.Provider>
  );
};
