import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/shop/hats' component={() => {
        return (
          <p>Hats Page</p>
        );
      }}/>
    </div>
  );
}

export default App;
