import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Estilos
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const Cardbox = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  height: 400px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;
  border: 1px solid black;

  &:hover {
    transform: scale(1.05);
  }

  .info {
    position: absolute;
    top: 220px;
    width: 260px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
  }

  h2 {
    font-size: 1.8em;
    color: black;
  }

  p {
    margin: 10px 0;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    position: relative;
    top: 320px;
    bottom: 20px;
    left: 35%;
    border: 1px solid black;
    margin-top: 30px;
    transform: translateX(-50%);
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

const SectionContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

// Componentes
function Card({ product }) {
  return (
    <Cardbox style={{ backgroundImage: `url(${product.fotoUrl})` }}>
      <div className="info">
        <h2>{product.nome}</h2>
        <p><strong>Valor:</strong> R$ {product.valor.toFixed(2)}</p>
        <p><strong>Descrição:</strong> {product.descricao}</p>
      </div>
      <button>Adicionar ao Carrinho</button>
    </Cardbox>
  );
}

function CategoryCard({ category }) {
  return (
    <Cardbox style={{ backgroundImage: `url(${category.fotoCat})` }}>
      <div className="info">
        <h2>{category.nome}</h2>
           </div>
    </Cardbox>
  );
}


function ColaboradorCard({ colaborador }) {
  return (
    <Cardbox style={{ backgroundImage: `url(${colaborador.fotoColab})` }}>
      <div className="info">
        <h2>{colaborador.nome}</h2>
        <p><strong>Instituição:</strong> {colaborador.nomeInstituicao}</p>
      </div>
    </Cardbox>
  );
}

export function CardList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const productsPerPage = 4; // Exibir 4 produtos por página

  useEffect(() => {
    fetchData('http://localhost:8080/categorias', setCategories);
    fetchData('http://localhost:8080/produtos', setProducts);
    fetchData('http://localhost:8080/colaboradores', setColaboradores);
  }, []);

  const fetchData = (url, setter) => {
    axios.get(url)
      .then(response => {
        setter(response.data);
      })
      .catch(error => {
        console.error(`Erro ao buscar dados de ${url}:`, error);
      });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleClick = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Container>
        {currentProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </Container>
      <Pagination>
        <button onClick={() => handleClick('prev')} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </Pagination>
      <SectionContainer>
        <SectionTitle>Categorias</SectionTitle>
        <Container>
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Container>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Colaboradores</SectionTitle>
        <Container>
          {colaboradores.map(colaborador => (
            <ColaboradorCard key={colaborador.id} colaborador={colaborador} />
          ))}
        </Container>
      </SectionContainer>
    </>
  );
}







