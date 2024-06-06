import React from 'react';
import Routes from './routes/Routes';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
