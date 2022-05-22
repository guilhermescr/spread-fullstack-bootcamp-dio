const words = [
  'paralelepípedo',
  'ovo',
  'carteira',
  'livro',
  'teclado',
  'pluridimensionalidade',
  'smartphone',
  'limão',
  'saxofone',
  'controle',
  'aplicação',
  'serenidade',
  'front-end',
  'revista',
  'interdisciplinarmente',
  'monitor',
  'feijão',
  'papel',
  'criança',
  'luz',
  'caneta',
  'disruptivo'
]

const getRandomIntegerInclusive = (min, max) => 
Math.floor(Math.random() * (max - min + 1)) + min

const getRandomWord = () => 
words[getRandomIntegerInclusive(0, words.length - 1)]
console.log(getRandomWord());