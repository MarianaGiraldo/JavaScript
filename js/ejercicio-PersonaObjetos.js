var empleados = new Array();


var recibirDatos = () => {
    var id, nombre, email, cargo, salario, sede;
    id = document.getElementById("documento").value;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    cargo = document.getElementById("cargo").value;
    salario = document.getElementById("salario").value;
    sede = document.getElementById("sede").value;
    return [id, nombre, email, cargo, salario, sede];
}

var crearPersona = (id, nombre, email, cargo, salario, sede) => {
    let datosBasicos = {
        id :id,
        nombre : nombre,
        email : email
    }
    let datosTrabajo = {
        cargo : cargo,
        salario : salario,
        sede :sede
    }
    let persona = {
        datosBasicos : datosBasicos,
        datosTrabajo : datosTrabajo
    }
    console.log(persona)
    return persona
}

var agregarEmpleado = () => {
    [id, nombre, email, cargo, salario, sede] = recibirDatos();
    let persona = crearPersona(id, nombre, email, cargo, salario, sede);
    empleados.push(persona)
    return empleados
}

var mostrarEmpleados = () => {
    var empleadosMostrar = agregarEmpleado();
    console.log(empleados)
    var tabla = document.getElementsByClassName("tablaEmpleados");
    var tblBody = document.getElementsByTagName("tbody");

    // Crea las celdas
  for (var i = 0; i < empleadosMostrar.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.id);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      
      celda = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.nombre);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);

      celda = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.email);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);

}