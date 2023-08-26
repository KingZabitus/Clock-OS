const input = document.getElementById("input");
const returnDiv = document.getElementById("return");

let currentTime = document.getElementById("currentTime")


setInterval(horaAtual, 1000);

input.addEventListener("keydown", () => {
  if (event.key === "Enter") { // Verificando se a tecla pressionada é Enter
      const command = input.value; // Obtendo o valor do input (o comando digitado pelo usuário)
      input.value = ""; // Limpando o input

      switch (command) { // Usando um switch statement para verificar o comando digitado pelo usuário
          case "ajuda": help(); break;

          case "hora": time(); break;

          case "cadastrarFoto": cadastrarFoto(); break;

          case "limpar": clearTerminal(); break;

          default:
              // Se o comando digitado pelo usuário não for reconhecido, exibir uma mensagem de erro
              const erroResposta = document.createElement("p");
              erroResposta.textContent = "Comando não reconhecido. Digite 'help' para ver uma lista de comandos disponíveis.";

              // Inserindo o elemento na div de respostas acima do input
              returnDiv.appendChild(erroResposta);
              break;
      }
      returnDiv.scrollTop = returnDiv.scrollHeight;

  }
});

// Funções

function horaAtual() {
  const horarioAtual = new Date().toLocaleTimeString();
  const dataAtual = new Date().toLocaleDateString();
  currentTime.textContent = horarioAtual + " " + dataAtual;
}

function help(){
  // Criando um elemento <p> e adicionando o texto de resposta como conteúdo desse elemento
  const helpResposta = document.createElement("p");
  helpResposta.innerHTML = "> Lista de comandos disponíveis: <br>> ajuda - exibe esta lista de comandos <br>> hora - exibe a hora atual <br>> cadastrarFoto - Cadastra sua foto";

  // Inserindo o elemento na div de respostas acima do input
  returnDiv.appendChild(helpResposta);
}

function time(){
  // Criando um elemento <p> e adicionando o texto de resposta como conteúdo desse elemento
  const timeResposta = document.createElement("p");
  const currentTime = new Date().toLocaleTimeString();
  timeResposta.textContent = ">A hora atual é: " + currentTime;

  // Inserindo o elemento na div de respostas acima do input
  returnDiv.appendChild(timeResposta);
  }

function cadastrarFoto(){
  // Criando um elemento <img> e adicionando a url e tamanho da imagem
  const cadastrarFotoResposta = document.createElement("img");
  cadastrarFotoResposta.setAttribute("src", "img/fabio.png");
  cadastrarFotoResposta.setAttribute("height", "120px");
  cadastrarFotoResposta.setAttribute("width", "120px");
  // Inserindo a imagem na div de respostas acima do input
  returnDiv.appendChild(cadastrarFotoResposta);
}

function clearTerminal(){
  while(returnDiv.firstChild){
    returnDiv.removeChild(returnDiv.lastChild);
  }
}