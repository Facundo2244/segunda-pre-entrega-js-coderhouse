let nombreprofesor = prompt("Por favor ingrese su nombre")
let nombreescuela = prompt("Por favor ingrese el nombre de la escuela")
let curso = prompt("Sobre qué curso desea obtener el listado?")
let cantidadalumnos = parseInt(prompt("Cuántos alumnos tiene" + " " + curso + "?"))

while (isNaN(cantidadalumnos)){
    cantidadalumnos = parseInt(prompt("El número ingresado es inválido, por favor ingrese el valor en DÍGITOS."))
} 

let listaestudiantes = []

for (let iterador = 0; iterador < cantidadalumnos; iterador++){
    let nombre = prompt("Nombre del estudiante n°" + (iterador + 1));
    let apellido = prompt("Apellido del estudiante n°" + (iterador + 1));
    let estudiante ={
        nombre : nombre,
        apellido : apellido,
    };
    listaestudiantes.push(estudiante);

}

console.log(listaestudiantes)