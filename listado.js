var nombreprofesor = prompt("Por favor ingrese su nombre")
var nombreescuela = prompt("Por favor ingrese el nombre de la escuela")
var curso = prompt("Sobre qué curso desea obtener el listado?")
var cantidadalumnos = parseInt(prompt("Cuántos alumnos tiene" + " " + curso + "?"))
var listaestudiantes = []

while (isNaN(cantidadalumnos)){
    cantidadalumnos = parseInt(prompt("El número ingresado es inválido, por favor ingrese el valor en DÍGITOS."))
} 

for (var iterador = 0; iterador < cantidadalumnos; iterador++){
    var nombre = prompt("Nombre del estudiante n°" + (iterador + 1));
    var apellido = prompt("Apellido del estudiante n°" + (iterador + 1));
    var promedios = promedio ()
    var estudiante ={
        nombre : nombre,
        apellido : apellido,
        promedio : promedios,
    };
    listaestudiantes.push(estudiante);

}

console.log("Bienvenida profe" + nombreprofesor + ", a continuación uste puede ver su listado de alumnos del curso" + curso + " de la escuela " + nombreescuela)
console.table(listaestudiantes)

let aprobados = listaestudiantes.filter(alumno => alumno.promedio >= 6)
let desaprobados = listaestudiantes.filter(alumno => alumno.promedio < 6)

console.log("Los alumnos aprobados son:")
console.table(aprobados)

console.log("Los alumnos desaprobados son:")
console.table(desaprobados)



function promedio () {
    var cantidadnotas = parseInt(prompt("Cuántas notas tiene"+ " ")) 
    while (isNaN(cantidadnotas)){
        cantidadnotas = parseInt(prompt("El número ingresado es inválido, por favor ingrese el valor en DÍGITOS."))
    } 
    var contadornotas = 1
    var puntaje = 0
    while (contadornotas <= cantidadnotas){
        var nota = parseInt(prompt("por favor ingrese la nota n°"+ " " + String(contadornotas)))
        while (isNaN(nota) || (nota < 1 || nota >10)){
            nota = parseInt(prompt("La nota ingresada es inválida, por favor ingrese un valor entre 1 y 10 expresado en DÍGITOS."))
        }
        var contadornotas = contadornotas + 1
        var puntaje = puntaje + nota
    }
    resultado = puntaje / cantidadnotas
    return resultado
}