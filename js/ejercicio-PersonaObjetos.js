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
    console.log(empleados);

    //Mostrar en tabla
    var tblBody = document.getElementsByTagName("tbody")[0];

    // Crea las celdas
  for (var i = 0; i < empleadosMostrar.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.id);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      
      var celda2 = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.nombre);
      celda2.appendChild(textoCelda);
      hilera.appendChild(celda2);

      var celda3 = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosBasicos.email);
      celda3.appendChild(textoCelda);
      hilera.appendChild(celda3);

      var celda4 = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosTrabajo.cargo);
      celda4.appendChild(textoCelda);
      hilera.appendChild(celda4);

      var celda5 = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosTrabajo.salario);
      celda5.appendChild(textoCelda);
      hilera.appendChild(celda5);

      var celda6 = document.createElement("td");
      textoCelda = document.createTextNode(empleadosMostrar[i].datosTrabajo.sede);
      celda6.appendChild(textoCelda);
      hilera.appendChild(celda6);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);

}