import React, { useContext } from 'react';

import { StockContext } from '../StockContent';
import Header from '../Header'

import './index.css'

const Dashboard = () => {
  const { boughtStocks } = useContext(StockContext);

  return (
    <>
        <Header />
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Dashboard</h1>
            <ul className="dashboard-list">
                {boughtStocks.map((stock, index) => (
                <li className="dashboard-elements" key={index}>
                    <img className="stock-img" src={stock.logo} alt="logo" />
                    <h2 className="stock-name">{stock.name} ({stock.ticker})</h2>
                    <p className='stock-amount'>{stock.c} {stock.currency}</p>
                    <p className={ stock.d < 0 ? 'stock-change-loss' : 'stock-change-profit'}>{stock.d} ({stock.dp}%)</p>
                </li>
                ))}
            </ul>
        </div>
    </>
  );
};

export default Dashboard;
