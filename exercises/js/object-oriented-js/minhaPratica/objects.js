var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

var newStudent = student;
delete newStudent.rollno;

console.log(Object.keys(student));
console.log(newStudent);


// Object destructuring

const hero = {
  nome: "Iron Man"
};

const { nome } = hero;
console.log(nome);