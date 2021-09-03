var num1, num2, signo;
//Funciones con parámetros y con retorno
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

//Función sin parametros y con retorno
function calcular() {
    num1 = Number.parseFloat(document.getElementById("num1").value);
    num2 = Number.parseFloat(document.getElementById("num2").value);
    signo = document.getElementById("operacion").value;

    switch (signo) {
        case "+":
            return sumar(num1, num2);
            
        case "-":
            return restar(num1, num2);
            
        case "*":
            return multiplicar(num1, num2);
            
        case "/":
            return dividir(num1, num2);
            
        default:
            console.log(signo);
            alert("Operacion inválida");
            break;
    }
}

//Función sin parámetros y sin retorno
function mostrarResultado() {
    var resultado = calcular();
    document.getElementById("resultado").innerHTML = resultado;
}

//Función con parámetros y sin retorno
function darDiaSemana(params) {
    
}
