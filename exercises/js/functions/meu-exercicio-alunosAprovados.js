let alunos = [5, 8, 9, 7];
let soma = 0;

function aprovados(alunos, mediaFinal=0) {
  let maioresNotas = [];
  let alunosReprovados = 0;
  
  for (let aluno of alunos) {
    soma += aluno;
    if (aluno >= mediaFinal) {
      maioresNotas.push(aluno);
    } else if (aluno < mediaFinal) {
      alunosReprovados++;
    }
  }
  maioresNotas.sort();
  maioresNotas.reverse();
  
  let mediaDaTurma = soma / alunos.length;
  console.log(`As maiores notas foram, respectivamente: ${maioresNotas}; temos ${alunosReprovados} aluno(s) reprovado(s) e a média da turma é: ${mediaDaTurma}.`);
}
aprovados(alunos, 6);