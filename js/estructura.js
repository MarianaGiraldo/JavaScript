const nomObj = {
    id: 123,
    salario: 1000000,
    nombre: "Mariana",
    apellido: "Giraldo",
};

// desesctructuración de objeto
console.log(nomObj.salario);

const {id, salario, nombre, apellido, email} = {
    // se cambia el nombre del objeto por las constantes que quiero retornar
    id: 123,
    salario: 1000000,
    nombre: "Mariana",
    apellido: "Giraldo",
    email: "mgl@gmail.com",
};
console.log(id + " - " + nombre + " - " + apellido + " - " + email);


//Crear 2 ejemplos de desestructuración

//Ejemplo 1
const {año, mes, dia, hora, minuto, segundo}={
    año: 2021,
    mes: 9,
    dia: 9,
    hora: 9,
    minuto: 10,
    segundo: 30
}
document.write("Fecha: "+dia+"/"+mes+"/"+año+"<br>")
document.write("Hora: "+hora+":"+minuto+":"+segundo+"<br>")

//Ejemplo 2
const {azul, amarillo, rojo, verde}={
    rojo: "#ff0000",
    azul: "#0000ff",
    amarillo: "#ffeb00",
    verde: "#00ff00"
}
window.onload = function() {
    var a=document.getElementsByClassName("color");
     a[0].style.backgroundColor=azul;
 }