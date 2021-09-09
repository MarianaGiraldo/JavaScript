axios.get(
    "https://jsonplaceholder.typicode.com/users/7").then(
        (datos)=> {console.log(datos.data)}
    )

axios.get(
    "https://jsonplaceholder.typicode.com/users/7").then(
        (datos)=> {console.log(datos.data.email)}
    )
