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
//Convertir los inputs en integers
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
  const opciones = ["1- Mostrar en formato de tabla todos los alumnos.",
  "2- Mostrar por consola la cantidad de alumnos que hay en clase.",
  "3- Mostrar por consola todos los nombres de los alumnos.",
  "4- Eliminar el último alumno de la clase.",
  "5- Eliminar un alumno aleatoriamente de la clase.",
  "6- Mostrar por consola todos los datos de los alumnos que son chicas.",
  "7- Mostrar por consola el número de chicos y chicas que hay en la clase.",
  "8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
  "9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
  "10- Añadir un alumno nuevo con datos aleatorios.",
  "11- Mostrar por consola el nombre de la persona más joven de la clase.",
  "12- Mostrar por consola la edad media de todos los alumnos de la clase.",
  "13- Mostrar por consola la edad media de las chicas de la clase.",
  "14- Añadir nueva nota a los alumnos.",
  "15- Ordenar el array de alumnos alfabéticamente según su nombre.",
  "16- Mostrar por consola el alumno de la clase con las mejores notas.",
  "17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.",
  "18- Añadir un punto extra a cada nota existente de todos los alumnos"];

// productor
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        console.log(opciones);
        rl.question('Escoge una opción de 1 a 18. Pulsa 0 para salir. ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
                console.log(resolve(num))
            } else {
                reject("Introduce un número");
            }
        })
    })
    return promise;
}

//consumidor
async function main(){
   do {
    try {
        const button = await getNumberFromConsole();
        console.log(button);
        SelectOption(button);
    } catch (error) {
        console.log("Tienes que introducir un número")
    }} while (button > 0 && button <=19)
}

function SelectOption(button) {

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
    students.pop();
  case 5:

    break;
  case 6:
    //students.forEach (students.gender === "female" => console.log())
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
    let average = ages / students.length;
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
}}

main();