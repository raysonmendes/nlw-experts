
const perguntas = [
    {
      pergunta: 'O que é JavaScript?',
      respostas: [
        'Uma linguagem de programação de servidor',
        'Uma linguagem de marcação',
        'Uma linguagem de programação de cliente',
      ],
      correta: 2
    },
    {
      pergunta: 'Como declarar uma variável em JavaScript?',
      respostas: [
        'var x = 5;',
        'int x = 5;',
        'let x = 5;',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do operador "===" em JavaScript?',
      respostas: [
        'Comparação estrita (valor e tipo)',
        'Atribuição de valor',
        'Comparação lógica (valor apenas)',
      ],
      correta: 0
    },
    {
      pergunta: 'O que é o DOM (Document Object Model) em JavaScript?',
      respostas: [
        'Um modelo de design gráfico para websites',
        'Uma linguagem de estilização de documentos',
        'Uma interface de programação para documentos HTML e XML',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a finalidade do comando "console.log()" em JavaScript?',
      respostas: [
        'Exibir mensagens de erro no console',
        'Imprimir informações no console para depuração',
        'Executar operações matemáticas',
      ],
      correta: 1
    },
    {
      pergunta: 'Como se chama a estrutura condicional que executa um bloco de código caso uma condição seja verdadeira?',
      respostas: [
        'Loop while',
        'Switch case',
        'if statement',
      ],
      correta: 2
    },
    {
      pergunta: 'O que é um array em JavaScript?',
      respostas: [
        'Um tipo de dado que armazena apenas números',
        'Um tipo de dado que armazena texto',
        'Uma estrutura que armazena uma coleção de elementos',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a diferença entre "let" e "const" na declaração de variáveis?',
      respostas: [
        'let é utilizado para números, e const para texto',
        'const é utilizado para valores que podem ser modificados, e let para valores constantes',
        'const é utilizado para valores constantes que não podem ser modificados, e let para valores que podem ser alterados',
      ],
      correta: 2
    },
    {
      pergunta: 'O que é uma função em JavaScript?',
      respostas: [
        'Um bloco de código que executa uma tarefa específica quando chamado',
        'Uma variável que armazena valores',
        'Um tipo de dado que representa um objeto',
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o objetivo do método "addEventListener" em JavaScript?',
      respostas: [
        'Adicionar estilos CSS a um elemento HTML',
        'Adicionar um evento a um elemento HTML para escutar e reagir a ações do usuário',
        'Remover um elemento HTML do DOM',
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas ){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  for (let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
        
      }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }
  
  