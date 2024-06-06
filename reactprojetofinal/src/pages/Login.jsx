import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação e envio do formulário
    if (!email.includes('@') || senha === '') {
      alert('Por favor, preencha os campos corretamente');
      return;
    }
    console.log('Formulário de login enviado', { email, senha });
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};


