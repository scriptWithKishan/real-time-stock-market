import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { StockProvider } from './components/StockContent'; 
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <StockProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/real-time-stock-market/home" component={Home} />
          <Route exact path="/real-time-stock-market/dashboard" component={Dashboard} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </StockProvider>
  );
}

export default App;
