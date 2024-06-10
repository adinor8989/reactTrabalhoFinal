import { Cardbox, Container } from './style.js';

export function Card() {
  return (
    <Cardbox>
      <img src="" alt="" />
      <h2>Título do Produto</h2>
      <h3>Descrição do Produto</h3>
      <button>Adicionar ao Carrinho</button>
    </Cardbox>
  );
}

export function CardList() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}