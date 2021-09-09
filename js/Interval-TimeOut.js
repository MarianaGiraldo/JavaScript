const saludo = () => {
    console.log("Hola")
};

//setInterval(saludo,3000);
setInterval(saludo(),3000);//Para mostrar 1 sola vez


//TimeOut
const evaluar = () =>{
    const ano = prompt("¿Qué año es?: ");
    if (ano < 2021) {
        alert("El año es anterior al actual")
    }else{
        alert("El año es el actual");
    }
}
//setTimeout(evaluar, 3000)