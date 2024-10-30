let puntaje = 0;
let aciertos = 0;
let porcientoAcierto = 0;
let totalPreguntas = 0;

let pregunta1 = prompt("¿Cuál es la capital de España?\n1- Madrid\n2- Barcelona\n3- Cadiz")

totalPreguntas += (1);

if (pregunta1 == "1" || pregunta1 == "Madrid") {
    puntaje += (3);
    alert("Correcto! Sumas +3");
    aciertos += (1);
} else if (pregunta1 == "2" || pregunta1 == "Barcelona") {
    alert("¡Era madrid!")
} else if (pregunta1 == "3" || pregunta1 == "Cadiz") {
    alert("¡Era madrid!")
} else {
    alert("¡Era madrid! -1 por empanao");
    puntaje -= (1);
}

// += Es igual a puntaje = puntaje+3
1
console.log(puntaje);
console.log(aciertos);

let pregunta2 = prompt("¿Cuál es la capital de Argetina?\n1- Mendoza\n2- Cordoba\n3- Buenos aires")

totalPreguntas += (1);

if (pregunta2 == "3" || pregunta2 == "Buenos aires") {
    puntaje += (3);
    alert("Correcto! Sumas +3");
    aciertos += (1);
} else if (pregunta2 == "2" || pregunta2 == "Cordoba") {
    alert("¡Era buenos aires!")
} else if (pregunta2 == "1" || pregunta2 == "Mendoza") {
    alert("¡Era buenos aires!")
} else {
    alert("¡Era buenos aires! -1 por empanao");
    puntaje -= (1);
}

console.log(puntaje);
console.log(aciertos);


let pregunta3 = prompt("¿Cuál es la capital de Uruguay?\n1- Montevideo\n2- Salto\n3- Mercedes")

totalPreguntas += (1);

if (pregunta3 == "1" || pregunta3 == "Montevideo") {
    puntaje += (3);
    alert("Correcto! Sumas +3");
    aciertos += (1);
} else if (pregunta3 == "2" || pregunta3 == "Salto") {
    alert("¡Era Montevideo!")
} else if (pregunta3 == "3" || pregunta3 == "Mercedes") {
    alert("¡Era Montevideo!")
} else {
    alert("¡Era Montevideo! -1 por empanao");
    puntaje -= (1);
}

porcientoAcierto = (aciertos * 100 / totalPreguntas);

console.log(puntaje);
console.log(aciertos);
alert("Has acertado un total de  " + aciertos + " preguntas")
alert("El procentaje de acierto es del " + porcientoAcierto + "%")

// Calcular % aciertos

// = operador de asignación
// == operador de comparación compara solo por valor
// === operador de compraración que compara por valor y por tipo