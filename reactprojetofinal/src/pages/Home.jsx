import React from 'react';
import styles from '../styles/Home.module.css';




export const Home = () => {
  const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, image: '/images/product1.jpg' },
    { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, image: '/images/product2.jpg' },
   
  ];
  return (
    <div>
      <h1>Produtos Disponíveis</h1>
     
       
    </div>
  );
};


