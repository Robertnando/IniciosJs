let Age = prompt('Ocupo que me digas tu edad')
if (Age>=18) {
    let Nombre = prompt('Dame tu nombre porfis');
    document.getElementById('Edad').innerHTML = (Nombre)
} 

function Result() {
    let x = parseInt(document.getElementById('Promedio1').value);
    let y = parseInt(document.getElementById('Promedio2').value);
    let z = parseInt(document.getElementById('Promedio3').value);
    let combo = (x+y+z);
    document.getElementById('Respuesta').innerHTML = (combo/3);
}