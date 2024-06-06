import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Carrinho.module.css';

export const Carrinho = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div>
                <h2>{item.name}</h2>
                <p>Preço: R${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <h2>Total: R${total}</h2>
          </div>
        </div>
      )}
    </div>
  );
};


