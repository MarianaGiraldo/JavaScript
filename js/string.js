const identificacion = 123;
const nombre1 = "Pedro Perez"

const union = "El funcionario "+ nombre1+" con identificación "+ identificacion;

//Con Bakticks
const valor = `El funcionario ${nombre1} con identificación ${identificacion}`;

console.log(union.toLocaleLowerCase());
console.log(valor.toUpperCase());
console.log(`id: ${identificacion}`)
