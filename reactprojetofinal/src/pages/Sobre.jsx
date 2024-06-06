import React from 'react';
import styles from '../styles/Sobre.module.css';



export const Sobre = () => {
  const teamMembers = [
    { id: 1, name: 'João Silva', description: 'Desenvolvedor Frontend', image: '/images/joao.jpg' },
    { id: 2, name: 'Maria Santos', description: 'Desenvolvedora Backend', image: '/images/maria.jpg' },
    
  ];

  return (
    <div className={styles.container}>
      <h1>Sobre Nós</h1>
      <div className={styles.grid}>
        {teamMembers.map(member => (
          <div key={member.id} className={styles.card}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


