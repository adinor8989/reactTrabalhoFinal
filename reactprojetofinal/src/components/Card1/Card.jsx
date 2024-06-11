import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Cardbox, Container } from './style.js';

export function Card(props) {
  const produto = props.item
  const { addToCart } = useContext(CartContext);

  return (
    <Cardbox>
      <img src="" alt="" />
      <h2>{produto.name}</h2>
      <h3>{produto.descricao}</h3>
      <h4>R$ {produto.price}</h4>
      <button onClick={()=>addToCart(produto)}>Adicionar ao Carrinho</button>
    </Cardbox>
  );
}

export function CardList() {
  const lista = [
    {id:1,name:"sapato", descricao:"sapato",image:"",price:10.20},
    {id:1,name:"Tênis", descricao:"sapato",image:"",price:10.20},
    {id:1,name:"Camisa", descricao:"sapato",image:"",price:10.20},
    {id:1,name:"Calça", descricao:"sapato",image:"",price:10.20}

  ]

  return (
    <Container>
      {lista.map(item=> (
      <Card item={item}/>
    ))}
    </Container>
  );
}