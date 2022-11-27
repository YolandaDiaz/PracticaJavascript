
import readline from 'readline';

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});

function isInt(str){
    // returns a boolean
    return /^[0-9]+$/.test(str)
  }

const isInt2 = (str) => {
    const integer = parseInt(str);
    if (Number.isNaN(integer)) {
        return false 
    } else {
        return true
    }
}

// productor
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question('Introduce el número: ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
                console.log(resolve(num))
            } else {
                reject('Has de introducir un número');
            }
        }}
    })

    return promise;
}
/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

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

let button = prompt ("Introduce un número del 0 al 18, para escoger una opción");

switch (button) {
  case 1:
    console.table (students);
    break;
  case 2:
    console.log(students.length)
    break;
  case 3:
    let nameStudents = students.map( function(students){
      return students.name;
    })
    console.log (nameStudents);
    break;
  case 4:
    students.pop(); /*recuerda que students es una constante, antes de nada, deberé conertirla a variable*/
    break;
  case 5:

    break;
  case 6:
    students.forEach (students.gender === "female" => console.log())
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
  case 10:
    break;
  case 11:
    break;
  case 12: /*en pruebas*/
    let ages = students.reduce ((sum, n) => sum.age + n.age, 0);
    console.log(ages);
    let averahe = ages / students.length;
    console.log(average);
    break;
  case 13:
    break;
  case 14:
    break;
  case 15:
    break;
  case 16:
    break;
  case 17:
    break;
  case 18:
    break;
  default:
  console.log ("Fin del programa")
}
