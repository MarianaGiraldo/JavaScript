
//4 tipos de funciones
//Sin params y sin retorno
var nomFuncion1 = () => {
    var contar = true;
    contar == true ? alert("Bienvenido") : alert("No se permite el ingreso");
};

//Sin params y con retorno
var nomFuncion2 = () => "Este es un valor de retorno";

var nomFuncion3 = () => {
    var texto = "Este es otro valor de retorno";
    return texto;
}

//Con params y sin retorno
var nomFuncion4 = (id, nombre) => {
    var persona= id + " - " + nombre;
    console.log(persona)
}

var nomFuncion5 = (nombre) => nombre;

var nomFuncion6 = (id, nombre) => {
    var persona= id + " - " + nombre;
    return persona;
}
