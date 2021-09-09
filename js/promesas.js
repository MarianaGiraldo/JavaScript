const b = 3;
const c =5;

const valorPromise = (b,c) => {
    return new Promise( 
        (resolve, reject) => {
            if (b < 0 || c < 0) {
                reject("Los números no son válidos");
            }else{
                resolve(b + c);
            }
        }

    )
};

//Cuando sé que sale bien
// console.log(
//     valorPromise(b,c).then(
//         (resultado)=> console.log(resultado)
//     )
// );

//Cuando puede haber error
console.log(
    valorPromise(b,c).then(
        (resultado)=> console.log(resultado)
    ).catch(
        (a) =>{console.log(a)}
    )
);


//Ejercicio 1
const multarVelocidad = (velocidad) => {
    return new Promise( 
        (resolve, reject) => {
            if (velocidad<70) {
                reject(`No hay multa por velocidad de: ${velocidad} km/h`);
            }else{
                resolve(`Se ha generado multa por ir a: ${velocidad} km/h`);
            }
        }

    )
};
const generarMulta = () =>{
    var velocidad = document.getElementById("velocidad").value;
    multarVelocidad(velocidad).then(
        (resultado)=> document.getElementById("resultado").innerHTML = resultado
    ).catch(
        (a) =>{document.getElementById("resultado").innerHTML =a}
    );
}

//Ejercicio 2
const confirmarContrasena = (contrasena, contrasena2) => {
    return new Promise( 
        (resolve, reject) => {
            if (contrasena === contrasena2) {
                resolve("La contraseña se ha verificado con éxito");
            }else{
                reject("Las contraseñas no son iguales");
            }
        }
    )
};

const verificarContrasena = () =>{
    var contrasena = document.getElementById("contrasena").value;
    var contrasena2 = document.getElementById("confirmContrasena").value;
    confirmarContrasena(contrasena, contrasena2).then(
        (verificacion)=> document.getElementById("verificacion").innerHTML = verificacion
    ).catch(
        (a) =>{document.getElementById("verificacion").innerHTML =a}
    );
}

