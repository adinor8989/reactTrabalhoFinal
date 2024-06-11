import React from 'react';
import { CardList } from '../components/Card1/Card';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 35px;
  color: black ;
  
`;


export function Home() {
    
    return (
        <>
        <Container>
      <h1>Lista de Produtos Dísponiveis</h1>
      
    </Container>
    <CardList />
    
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


