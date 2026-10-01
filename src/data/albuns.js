// Os 13 álbuns de estúdio. A seção Discografia lê este array com map().
// O filtro (useState) usa o campo 'ano' de cada álbum.
export const albuns = [
  {
    "capa": "PleasePleaseMe.jpeg",
    "alt": "Capa do álbum Please Please Me",
    "ano": 1963,
    "titulo": "Please Please Me",
    "faixas": "14 faixas",
    "descricao": "Álbum de estreia da banda, gravado em pouco mais de dez horas de estúdio."
  },
  {
    "capa": "WithTheBeatles.jpeg",
    "alt": "Capa do álbum With the Beatles",
    "ano": 1963,
    "titulo": "With the Beatles",
    "faixas": "14 faixas",
    "descricao": "Segundo álbum da banda, conhecido pela capa em preto e branco com os rostos parcialmente na sombra."
  },
  {
    "capa": "AHardDaysNight.jpeg",
    "alt": "Capa do álbum A Hard Day's Night",
    "ano": 1964,
    "titulo": "A Hard Day's Night",
    "faixas": "13 faixas",
    "descricao": "Trilha sonora do primeiro filme da banda, com todas as músicas assinadas por Lennon e McCartney."
  },
  {
    "capa": "ForSale.jpeg",
    "alt": "Capa do álbum Beatles for Sale",
    "ano": 1964,
    "titulo": "Beatles for Sale",
    "faixas": "14 faixas",
    "descricao": "Mistura composições próprias com regravações, gravado em meio a uma agenda intensa de turnês."
  },
  {
    "capa": "Help!.jpeg",
    "alt": "Capa do álbum Help!",
    "ano": 1965,
    "titulo": "Help!",
    "faixas": "14 faixas",
    "descricao": "Trilha do segundo filme da banda, traz a clássica \"Yesterday\"."
  },
  {
    "capa": "RubberSoul.jpeg",
    "alt": "Capa do álbum Rubber Soul",
    "ano": 1965,
    "titulo": "Rubber Soul",
    "faixas": "14 faixas",
    "descricao": "Marca a virada da banda para sonoridades mais maduras, com influências folk."
  },
  {
    "capa": "Revolver.jpeg",
    "alt": "Capa do álbum Revolver",
    "ano": 1966,
    "titulo": "Revolver",
    "faixas": "14 faixas",
    "descricao": "Álbum marcado pela experimentação em estúdio, com fitas invertidas e novos efeitos sonoros."
  },
  {
    "capa": "Sgt.Pepper's.jpeg",
    "alt": "Capa do álbum Sgt. Pepper's Lonely Hearts Club Band",
    "ano": 1967,
    "titulo": "Sgt. Pepper's Lonely Hearts Club Band",
    "faixas": "13 faixas",
    "descricao": "Álbum conceitual considerado um dos marcos do rock psicodélico."
  },
  {
    "capa": "MagicalMystery.jpeg",
    "alt": "Capa do álbum Magical Mystery Tour",
    "ano": 1967,
    "titulo": "Magical Mystery Tour",
    "faixas": "11 faixas",
    "descricao": "Trilha sonora do especial de televisão homônimo da banda."
  },
  {
    "capa": "AlbumBranco.jpeg",
    "alt": "Capa do álbum The Beatles, conhecido como Álbum Branco",
    "ano": 1968,
    "titulo": "The Beatles (Álbum Branco)",
    "faixas": "30 faixas · álbum duplo",
    "descricao": "Reúne uma enorme variedade de estilos musicais."
  },
  {
    "capa": "YellowSubmarine.jpeg",
    "alt": "Capa do álbum Yellow Submarine",
    "ano": 1969,
    "titulo": "Yellow Submarine",
    "faixas": "13 faixas",
    "descricao": "Trilha sonora do filme de animação de mesmo nome."
  },
  {
    "capa": "AbbeyRoad.jpeg",
    "alt": "Capa do álbum Abbey Road",
    "ano": 1969,
    "titulo": "Abbey Road",
    "faixas": "17 faixas",
    "descricao": "Penúltimo álbum gravado pela banda, famoso pela capa da faixa de pedestres em Londres."
  },
  {
    "capa": "LetItBe.jpeg",
    "alt": "Capa do álbum Let It Be",
    "ano": 1970,
    "titulo": "Let It Be",
    "faixas": "12 faixas",
    "descricao": "Último álbum lançado pela banda, marcado pelo fim do grupo."
  }
]

export const filtros = [
  { id: 'todos', rotulo: 'Todos', de: 1963, ate: 1970 },
  { id: 'inicio', rotulo: '1963–1965', de: 1963, ate: 1965 },
  { id: 'estudio', rotulo: '1966–1967', de: 1966, ate: 1967 },
  { id: 'final', rotulo: '1968–1970', de: 1968, ate: 1970 },
]
