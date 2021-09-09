console.log(
    fetch("https://jsonplaceholder.typicode.com/users/10").then(
    (r)=> {
        return r.json();
    }
    ).then(
        (data)=> {
            console.log(data)
            document.write(data.name+"<br>")
            document.write(data.email+"<br>")
        }
    ).catch(
        (error) => {
            document.write(`Error: ${error} al leer el archivo`)
        }
    )
)