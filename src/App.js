import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/shop'>
        <ShopPage />
      </Route>
    </div>
  );
}

export default App;
