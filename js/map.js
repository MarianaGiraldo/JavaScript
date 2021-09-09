const vector1 = [1,2,3,4,5,6];
const vector2 = [1,2,3,4,5,6];

// vector1.forEach(element => {
//     console.log(element)
// });

vector1.map(dato => {
    console.log(dato);
})


//spread
const nuevoVec = [...vector1,...vector2]
console.log(nuevoVec) 