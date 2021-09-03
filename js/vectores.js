
var nomArray = ["a","b","2",123, true, 1.23];

//cambiar un valor
nomArray[6] = 9.87;

//agregar valor
nomArray[7] = "nuevo valor";
nomArray.push("otro valor"); //Agrega valor al final
nomArray.unshift("Valor al principio")
//console.log(nomArray);

//Eliminar valor
nomArray.pop() // Elimina el último
nomArray.shift() //Elimina el primero
//console.log(nomArray);

//nomArray.splice(1);



//Contruir función tipo flecha que reciba 3 params: id, nombre, email
//los agregue a un vector y me retorne el vector
var persona= [];
var arrayPersona = (id, nombre, email) => {
    persona.push(id, nombre, email);
    return persona;
}

var newVector = []
var prueba = [1,2,3]
nomArray.push(prueba)
newVector.push("Un valor", "otro valor")
newVector.push(nomArray)

