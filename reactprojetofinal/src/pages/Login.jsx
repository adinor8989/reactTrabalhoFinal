import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!email.includes('@') || senha === '') {
      setMessage('Por favor, preencha os campos corretamente');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/clientes/login', { email, senha });

      if (response.status === 200) {
        setMessage('Bem-vindo!');
        navigate('/');
      }
    } catch (error) {

      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Usuário ou senha inválidos');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <h2>
          <a href="http://localhost:5173/registro">Cadastro</a>
        </h2>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
