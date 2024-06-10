import React from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Sobre.module.css";


export function Sobre() {
  const contacts = [
    {
      name: "Adinor Sant Anna",
      img: "https://avatars.githubusercontent.com/u/62819950?v=4",
      number: "Telefone: (24) 9 9301-3216",
      email: "E-mail: adinor_original@hotmail.com",
      descricao: `🔭 Residente Serratec (Programa FullStack)
       Estudante de Java ...
       Amante de Vôlei ...`,
      github: "https://github.com/adinor8989",
      instagram: "https://www.instagram.com/adinorsantanna",
    },
    {
      name: "Douglas Tapajóz Lima",
      img:
        "https://avatars.githubusercontent.com/u/162213811?v=4",
      number: "Telefone: (24) 9 9226-5269",
      email: "E-mail: Douglas Tapajóz Lima",
      descricao: "🖥️ Desenvolvedor Full-Stack Serratec 🏆Tudo posso no JAVA que me fortalece! by:🌍",
      github: "https://github.com/dodo547",
      instagram: "https://www.instagram.com/douglas_sk2/",
    },
    {
      name: "Ian Gonçalves Paes Siqueira",
      img:
        "https://avatars.githubusercontent.com/u/162218082?v=4",
      number: "Telefone: (24) 9 9245-2246",
      email: "E-mail: iangpsiqueira@gmail.com",
      descricao: "📀 Desenvolvedor Full-Stack Serratec",
      github: "https://github.com/Ianzinzin",
      instagram: "https://www.instagram.com/ian_gps_?igsh=MW13ZGFyOGJta3o1eQ==",
    },
    {
      name: "Jonas Bastos de Freitas Gomes",
      img:
        "https://avatars.githubusercontent.com/u/162216533?v=4",
      number: "Telefone: (24) 9 9200-2192",
      email: "E-mail: jonasbf.gomes@gmail.com.br",
      descricao: "O brabo tem nome! 😎",
      github: "https://github.com/Jbasts",
      instagram: "https://www.instagram.com/j.basts/",
    },
    {
      name: "Marcos Mattos Netto",
      img:
        "https://avatars.githubusercontent.com/u/162363111?v=4",
      number: "Telefone: (24) 9 7835-4842",
      email: "E-mail: marcosmattosnetto@hotmail.com",
      descricao: "📀 Desenvolvedor Full-Stack Serratec",
      github: "https://github.com/Maretto-Mattos",
      instagram: "https://www.instagram.com/maretto_mattos/",
    },
    {
      name: "Maycon Statzner",
      img:
        "https://avatars.githubusercontent.com/u/162384947?v=4",
      number: "Telefone: (24) 98818-0122",
      email: "E-mail: mayconocs@gmail.com",
      descricao: "💻Desenvolvedor Full Stack Serratec  🏋️‍♂️Personal Trainer 🙏Oração e trabalho superam tudo.",
      github: "https://github.com/mikestatzner",
      instagram: "https://www.instagram.com/mayconstatzner?igsh=cnJvN3h4YnVyM3dn&utm_source=qr",
    }
  ];

  return (
    <div>
      <h1 className={styles.heading}>SOBRE NÓS</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          number={contact.number}
          email={contact.email}
          descricao={contact.descricao}
          github={contact.github}
          instagram={contact.instagram}

          img={contact.img}
        />
      ))}
    </div>
  );
}