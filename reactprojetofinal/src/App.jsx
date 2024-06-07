import React from 'react';
import Header from './components/Header';
import Routes from './routes/Routes';
import Footer from './components/Footer'; 
import CartProvider from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Routes />
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
