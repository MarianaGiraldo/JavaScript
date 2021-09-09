const empleado = {
    cod:123,
    cargo: "nada",
    salario: 1234567,
    email: "nada@nada.com"
}
//desglosamiento de objetos
const prueba = ({email, salario}) => {
    var datos= "Email: "+email+". Salario: "+salario;
    return datos;
}

console.log(prueba(empleado));

const prueba2 = ({salario}) => {
    var datos= salario *1.25;
    return datos;
}

console.log("El aumento de su salario es: " +prueba2(empleado));
//document.writeln(("El aumento de su salario es: " +prueba2(empleado)))

//Crear 2 ejemplos desglosamiento

//Ejemplo 1
const carro = {
    marca:"Ford",
    modelo: "Mustang",
    año:1969,
    color: "negro",
    dueño: "Desconocido"
}

const DatosCarro = ({marca, modelo, año}) =>{
    var datos = "Carro: "+marca+" - "+modelo+" - "+año
    return datos;
}
document.writeln(DatosCarro(carro)+"<br>")

//Ejemplo 2
const operadores = ["+","-","*","/"]
const calculadora ={
    numero1: Math.floor(Math.random()* 100),
    numero2:Math.floor(Math.random()* 100),
    operador: operadores[Math.floor(Math.random()*4)]
}
const calcular= ({numero1, numero2, operador}) =>{
    var dato = numero1+ " " +operador+ " " +numero2+" = "
    switch (operador) {
        case "+":
            return dato+(numero1 +numero2);
        case "-":
            return dato+(numero1 -numero2);
        case "*":
            return dato+(numero1 *numero2);
        case "/":
            return dato+(numero1 /numero2);
        default:
            break;
    }
}
document.writeln(calcular(calculadora)+"<br>")
