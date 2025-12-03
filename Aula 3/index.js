dayjs.locale('pt-br')
dayjs.extend(window.dayjs_plugin_relativeTime)

let participantes = [
  {
    nome: "Beatriz Ramos",
    email: "beatriz@gmail.com",
    dataInscricao: new Date(2025, 3, 22, 19, 20),
    dataCheckIn: new Date(2025, 3, 25, 22, 00),
  },
  {
    nome: "Lucas Sousa",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2025, 8, 1, 10, 30),
    dataCheckIn: new Date(2025, 8, 4, 15, 45),
  },
  {
    nome: "Rafaela Mendes",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2025, 4, 28, 14, 0),
    dataCheckIn: null,
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2025, 3, 5, 8, 55),
    dataCheckIn: new Date(2025, 3, 7, 18, 30),
  },
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 11, 15, 20, 10),
    dataCheckIn: new Date(2024, 11, 20, 11, 20),
  },
  {
    nome: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2025, 9, 10, 11, 40),
    dataCheckIn: null,
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2025, 2, 25, 16, 5),
    dataCheckIn: new Date(2025, 2, 28, 17, 0),
  },
  {
    nome: "Felipe Rocha",
    email: "felipe@gmail.com",
    dataInscricao: new Date(2025, 6, 2, 9, 30),
    dataCheckIn: new Date(2025, 6, 6, 10, 25),
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2025, 1, 18, 13, 20),
    dataCheckIn: null,
  },
  {
    nome: "Sofia Martins",
    email: "sofia@gmail.com",
    dataInscricao: new Date(2025, 7, 7, 18, 0),
    dataCheckIn: new Date(2025, 7, 12, 21, 40),
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
   <td>
    <strong>
       ${participante.nome}
     </strong>
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

const adicionarParticipantes = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find((p) => {
      return p.email == participante.email
  })

  if(participanteExiste){
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name=nome]').value = ""
  event.target.querySelector('[name=email]').value = ""
}

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = 'Tem certeza que deseja continuar?'
  if(confirm(mensagemConfirmacao) === false){
    return
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
}