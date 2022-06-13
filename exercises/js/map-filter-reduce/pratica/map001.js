const alunos = [
  {
    nome: 'Joãozinho',
    idade: 16,
    media: 8.5,
    curso: 'Engenharia de Produção'
  },
  {
    nome: 'Mariana',
    idade: 14,
    media: 7.9,
    curso: 'Influencer Digital'
  },
  {
    nome: 'Lineu',
    idade: 18,
    media: 9.7,
    curso: 'Medicina'
  },
  {
    nome: 'Bárbara',
    idade: 17,
    media: 9.1,
    curso: 'Marketing Digital'
  }
];

let cursos = alunos.map(aluno => aluno.nome + ": " + aluno.curso);
console.log(cursos);