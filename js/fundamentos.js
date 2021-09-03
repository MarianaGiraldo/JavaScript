//Variables
var nombre = "Mariana"; //Declara una variable
let edad = 17; //Declara una variable local con ámbito de bloque
const pi = 3.1416; //Declara un nombre de constante de solo lectura y ámbito de bloque.

//Funciones
//1. Función sin parámetros y sin retorno
function saludar(){
    alert("Hola Mundo...");
}
function nomFuncion(){
    console.log("Aquí va un texto por consola");
    document.write("Texto en el documento");
}

//2. Función sin parámetros y sin retorno
function despedir(){
    return "Adiós";
}

//3. Función con parámetro y sin retorno
function saludarPersona(nombre){
    console.log("Hola "+ nombre);
}

function horario(uno, dos) {
    let todo= 100;
    console.log(uno +dos + todo)
}

function validar(cod, user, passw) {
    var codigo, usuario, clave;
    codigo = 3;
    usuario = "carlos";
    clave = "abc123";

    if( (cod == codigo)&&(user == usuario)&&(passw == clave)) {
        alert("El usuario ha sido validado");
    }else{
        alert("El usuario no ha sido validado");
    }
}

//3. Función con parámetros y con retorno
function registrar (id, nombre, telefono){
    var usuario;
    usuario = id + " - "+nombre+ " - " + telefono;
    alert("Usuario registrado correctamente");
    return usuario;
}

