const pokemons = [
  {
    nome: "Gengar",
    imagem: "/img/gengar_pk.webp",
    tipo: "Fantasma/Veneno",
    descricao: "Gengar é um Pokémon do tipo Fantasma/Veneno, conhecido por sua aparência sombria e sorriso travesso. Ele adora pregar peças e se esconde nas sombras para assustar seus oponentes. Além disso, possui grande velocidade e ataques especiais poderosos, sendo um dos fantasmas mais icônicos e temidos da franquia."
  },
  {
    nome: "Exeggutor",
    imagem: "/img/exeggutor.webp",
    tipo: "Planta/Psíquico",
    descricao: "é um Pokémon dos tipos Planta e Psíquico que se assemelha a uma palmeira ambulante com três cabeças, cada uma com personalidade e pensamento próprios."
  },
  {
    nome: "Magnamite",
    imagem: "/img/magnamite.webp",
    tipo: "Elétrico/Aço",
    descricao: "As ondas eletromagnéticas emitidas pelas unidades nas laterais de sua cabeça expelem antigravidade, o que permite que ele flutue."
  },
  {
    nome: "charmander",
    imagem: "/img/  .webp",
    tipo: "Fogo",
    descricao: "obviamente, prefere lugares quentes. se ele pegar chuva, jorra vapor a ponta da sua cauda."
  },
  {
    nome: "lapras",
    imagem: "/img/  .webp",
    tipo: "Água/Ice",
    descricao: "Esses pokemon foi tão caçado, que está à beira da extinção. Ele serve de barca e ajuda pessoas a atravessar rios e oceanos."
  },
  {
    nome: "dratini",
    imagem: "/img/  .webp",
    tipo: "Dragão",
    descricao: "Foi considerado Pokemon mitologico até recentemente, quando uma pequena colônia deles foi encontrada vivendo debaixo d'água"
  },
  {
    nome: "Abra",
    imagem: "/img/Abra.webp",
    tipo: "Psíquico",
    descricao: "domina o teletransporte para escapar e surpreender o inimigo. É peça-chave em batalhas inteligentes, vencendo pela mente e não pela força."
  },
  {
    nome: "Squartl",
    imagem: "/img/squartl.webp",
    tipo: "Água",
    descricao: "Seus jatos d'água têm grande impacto, e sua concha funciona como defesa natural. Um parceiro ágil que se adapta a qualquer situação."
  },
  {
    nome: "Primape",
    imagem: "/img/primeape.webp",
    tipo: "Lutador",
    descricao: "Seus golpes ficam cada vez mais fortes conforme perde a calma, tornando-o imprevisível. Um lutador bruto que não recua diante de nada."
  },
  {
    nome: "Eevee ",
    imagem: "/img/  .webp",
    tipo: "normal",
    descricao: "Sua capacidade de evoluir para muitas formas permite que ele se adapte de forma suave e perfeita a qualquer ambiente."
  },
  {
    nome: "Rattata",
    imagem: "/img/  .webp",
    tipo: "normal",
    descricao: "Mastiga qualquer coisa com suas presas. Se você vir um, pode ter certeza de que outros 40 vivem na área."
  },
   {
    nome: "Clefairy",
    imagem: "/img/  .webp",
    tipo: "fada",
    descricao: "Em noites de lua cheia, Clefairy se reúne de todos os lugares e dança. O banho de luar os faz flutuar."
  },
   {
    nome: "Beedrill",
    imagem: "/img/  .webp",
    tipo: "Inseto / Veneno",
    descricao: "Beedrill é feroz e rápido, com agulhas afiadas em seus braços que atacam com precisão. Vive em colmeias e protege ferozmente seu território."
  },
   {
    nome: "Bulbasaur",
    imagem: "/img/  .webp",
    tipo: "Planta / Veneno",
    descricao: "Bulbasaur tem uma semente nas costas que cresce com ele. Ele absorve energia solar para fortalecer seus ataques e é conhecido por sua lealdade aos treinadores."
  },
   {
    nome: "Onix",
    imagem: "/img/  .webp",
    tipo: "Pedra / Terra",
    descricao: "Onix é um enorme Pokémon serpente feito de rochas. Sua força e tamanho o tornam quase impenetrável, mas ele se move surpreendentemente rápido em cavernas e montanhas."
  },

  
    

];

let i = 0; // índice atual
const img = document.querySelector('.pokemon');
const prev = document.querySelector('.ctrl--left');
const next = document.querySelector('.ctrl--right');

// elementos de texto na tela
const nome = document.querySelector('.nome');
const tipo = document.querySelector('.tipo');
const descricao = document.querySelector('.descricao');

// função que mostra o Pokémon
function mostrar(n) {
  i = (n + pokemons.length) % pokemons.length;

  img.src = pokemons[i].imagem;
  nome.textContent = pokemons[i].nome;
  tipo.textContent =  pokemons[i].tipo;
  descricao.textContent = pokemons[i].descricao;
}

// clique nos botões
next.addEventListener('click', () => mostrar(i + 1));
prev.addEventListener('click', () => mostrar(i - 1));

// setas do teclado
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') mostrar(i + 1);
  if (e.key === 'ArrowLeft') mostrar(i - 1);
});

// inicia mostrando o primeiro
mostrar(i);