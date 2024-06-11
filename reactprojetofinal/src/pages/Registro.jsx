import React, { useState } from 'react';
import styles from '../styles/Registro.module.css';
import { postCliente } from '../service/cliente';

export const Registro = () => {

  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    // senha: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      postCliente(form);
      navigate('/'); 
    } catch (error) {
      console.error("Erro ao registrar o cliente:", error);

    }
  };

  return (
    <div className={styles.container}>
      <h1>Registro de Usuário</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required maxLength="14" />
        <input type="text" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
        <input type="text" name="cep" placeholder="Endereço" value={form.cep} onChange={handleChange} required />
        {/* <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} required /> */}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};