import React, { useContext } from 'react';
import { StockContext } from '../StockContent';
import CompanyElement from '../CompanyElement';
import Header from '../Header';
import "./index.css";

const Home = () => {
  const { handleBuyStock } = useContext(StockContext);

  return (
    <>
      <Header />
      <div className="home-container">
        <ul className="company-list">
          <CompanyElement ticker="AAPL" onBuy={handleBuyStock} />
          <CompanyElement ticker="GOOG" onBuy={handleBuyStock} />
          <CompanyElement ticker="MSFT" onBuy={handleBuyStock} />
          <CompanyElement ticker="NVDA" onBuy={handleBuyStock} />
          <CompanyElement ticker="TSLA" onBuy={handleBuyStock} />
          <CompanyElement ticker="ATHM" onBuy={handleBuyStock} />
          <CompanyElement ticker="META" onBuy={handleBuyStock} />
          <CompanyElement ticker="AMZN" onBuy={handleBuyStock} />
          <CompanyElement ticker="INFY" onBuy={handleBuyStock} />
          <CompanyElement ticker="IBM" onBuy={handleBuyStock} />
          <CompanyElement ticker="INFY" onBuy={handleBuyStock} />
          <CompanyElement ticker="INTC" onBuy={handleBuyStock} />
        </ul>
      </div>
    </>
  );
};

export default Home;
