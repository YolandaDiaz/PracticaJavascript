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
    return /^[0-9]+$/.test(str)
  }
//Datos iniciales
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  const opciones = [
  "Estas son las opciones disponibles:",
  "1- Mostrar en formato de tabla todos los alumnos.",
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
        rl.question('Escoge una opción de 1 a 18. O pulsa 0 para salir. ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
            } else {
                reject("Introduce un número");
            }
        })
    })
    return promise;
}

//consumidor
async function main(){
    let button;
   do {
    button = await getNumberFromConsole();
    try {
        console.log("Ha seleccionado la opción número:", button);
        SelectOption(button);
    } catch (reject) {
        console.log("Tienes que introducir un número")
    }} while ((button > 0) && (button <=18))
}

function SelectOption(button) {

switch (button) {
  case 1:
    console.table (students);
    break;
  case 2:
    console.log("En clase hay:", students.length, "alumnos.")
    break;
  case 3:
    let nameStudents = students.map( function(students){
      return students.name;
    })
    console.log (nameStudents);
    break;
  case 4:
    students.pop();
    console.log ("Se ha eliminado el último alumno de la clase");
    break;
  case 5:
    students.splice(calculateRandomNumber(0, students.length-1),1);
    console.log("se ha eliminado una alumno aleatoriamente de la clase.")
    break;
  case 6:
    students.find(char => {
      if (char.gender == "female") {
          console.log("Los datos de las alumnas femeninas son:", char)}
    });
    break;
  case 7:
    let NumFemale = 0;
    let NumMale = 0;
    students.find(char => {
    if (char.gender == "female") {
        NumFemale++}
        if (char.gender == "male") {
        NumMale ++  
        } 
    });
    console.log("En clase hay", NumFemale, "chicas, y", NumMale, "chicos.")
    break;
  case 8:
    const areFemale = (student) => student.gender == "female";
    console.log("¿Todos los alumnos de la clase son chicas?", students.every(areFemale));
    break;
  case 9:
    students.filter(function (twenties) {
      if (twenties.age >= 20 && twenties.age <= 25)
      return console.log(twenties.name, "tiene entre 20 y 25 años.")
    })
    break;
  case 10:
    let newGender = availableGenders.at(calculateRandomNumber(0,1));
    let newName = newGender === "male" ? availableMaleNames.at(calculateRandomNumber(0,5)) : availableFemaleNames.at(calculateRandomNumber(0,5));
    students.push({
      age: calculateRandomNumber(20, 50),
      examScores: [],
      gender: newGender,
      name: newName})
    console.log ("Se ha agregado un nuevo alumno a la clase.");
    break;
  case 11:
    students.sort(function (a,b) {
      if (a.age > b.age) {
          return 1;
      } if (a.age < b.age) {
          return -1;
      } return 0;
    });
    let NameYoung = students.at(0).name;
    console.log("La persona más joven de la clase es:", NameYoung)
    break;
  case 12:
    const allAges = students.reduce ((sum, n) => sum + n.age, 0);
    const average = allAges / students.length;
    console.log("La edad media de todos los alumnos de la clase es:",average);
    break;
  case 13:
    let onlyGirls = [];
    students.find(char => {
    if (char.gender == "female") {
         onlyGirls.push(char) }
    });
    const girlsAges = onlyGirls.reduce ((sum, n) => sum + n.age, 0);
    const averageGirls = girlsAges / onlyGirls.length;
    console.log("La edad media de todas las alumnas de la clase es:",averageGirls);
    break;
  case 14:
    students.forEach(n => n.examScores.push(calculateRandomNumber(0,10)));
    console.log("Se ha añadido una nueva nota a cada alumno");
    break;
  case 15:
    students.sort(function (a,b) {
      const namesA = a.name.toLowerCase();
      const namesB = b.name.toLowerCase();
      if (a.name > b.name) {
          return 1;
      } if (a.name < b.name) {
          return -1;
      } return 0;
  })
  console.log("Los alumnos ordenados alfabéticamente por su nombre quedan así:", students)
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