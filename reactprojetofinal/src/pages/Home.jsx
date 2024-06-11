import React from 'react';
import styles from '../styles/Home.module.css';
import { CardList } from '../components/Card1/Card';



export function Home() {
    
    return (
        <>
        <div>
      <h1>Lista de Produtos</h1>
      <CardList />
    </div>
      </>
            
    )
}
export default Home;

























// export const Home = () => {
//   const products = [
//     { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, image: '/images/product1.jpg' },
//     { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, image: '/images/product2.jpg' },
   
//   ];
//   return (
//     <div>
//       <h1>Produtos Disponíveis</h1>
     
       
//     </div>
//   );
// };


