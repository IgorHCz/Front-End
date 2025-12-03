let participantes = [
  {
  nome: "Myke Brito",
    email: "myke@gmail.com",
    dataInscricao: new Date(2025, 10, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00),
  },
  {
    nome: "Ana Silva",
    email: "ana.silva@outlook.com",
    dataInscricao: new Date(2024, 3, 1, 10, 30),
    dataCheckIn: new Date(2024, 3, 4, 15, 45),
  },
  {
    nome: "João Oliveira",
    email: "joao.oliver@gmail.com",
    dataInscricao: new Date(2024, 2, 28, 14, 0),
    dataCheckIn: new Date(2024, 3, 3, 9, 10),
  },
  {
    nome: "Maria Santos",
    email: "maria.santos@yahoo.com",
    dataInscricao: new Date(2024, 3, 5, 8, 55),
    dataCheckIn: new Date(2024, 3, 7, 18, 30),
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@hotmail.com",
    dataInscricao: new Date(2024, 2, 15, 20, 10),
    dataCheckIn: new Date(2024, 2, 20, 11, 20),
  },
  {
    nome: "Juliana Almeida",
    email: "jualmeida@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 11, 40),
    dataCheckIn: new Date(2024, 3, 14, 13, 50),
  },
  {
    nome: "Rafaela Mendes",
    email: "rafa.mendes@outlook.com",
    dataInscricao: new Date(2024, 2, 25, 16, 5),
    dataCheckIn: new Date(2024, 3, 1, 17, 0),
  },
  {
    nome: "Fernando Rocha",
    email: "fer.rocha@hotmail.com",
    dataInscricao: new Date(2024, 3, 2, 9, 30),
    dataCheckIn: new Date(2024, 3, 6, 10, 25),
  },
  {
    nome: "Laura Ferreira",
    email: "laura.ferreira@gmail.com",
    dataInscricao: new Date(2024, 2, 18, 13, 20),
    dataCheckIn: new Date(2024, 2, 23, 16, 15),
  },
  {
    nome: "Gabriel Lima",
    email: "gblima@yahoo.com",
    dataInscricao: new Date(2024, 3, 7, 18, 0),
    dataCheckIn: new Date(2024, 3, 12, 21, 40),
  },
];

const criarNovoParticipante = (participante) => {
  
  const dataInscricao = dayjs(Date.now()).to (participante.dataInscricao)
  const dataCheckIn =dayjs(Date.now()).to(participante.dataCheckIn)

  return `
  <tr>
   <td>
    <strong>
       ${participante.nome}
     </strong>
       <br>
      <small>
        ${participante.email}
       </small>
   </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
  
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
output = output + criarNovoParticipante(participante)
  }

document.querySelector('tbody').innerHTML = output

}

atualizarLista(participantes)