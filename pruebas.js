import readline from 'readline';
//cálculo de número aleatorio
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
// configurar la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});
//Datos iniciales
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];

 

  console.table (students);

  console.log(students.length)

  let ages = students.reduce ((sum, n) => sum.age + n.age, 0);
  console.log(ages);
  let average = ages / students.length;
  console.log(average);
