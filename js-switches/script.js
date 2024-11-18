let fruta = (prompt("1 Pera\n2 Manzana \n3 Limón \nSalir"))
let totalFruta = 0;
let kilosFruta = 0;

console.log(fruta);

while (fruta !== "Salir") {

    switch (fruta) {
        case "1":
        case "Pera":
            alert("1 euro el Kilo");
            kilosFruta = parseInt(prompt("¿Cuantos kilos quieres?"))
            totalFruta += (kilosFruta * 1);
            console.log(totalFruta);
            break;
        case "2":
        case "Manzana":
            alert("2,3€ el Kilo");
            totalFruta += 2.3;
            console.log(totalFruta);
            break;
        case "3":
        case "Limón":
        case "Limon":
            alert("1,25€ el Kilo");
            totalFruta += 1.25;
            console.log(totalFruta);
            break;
        default:
            alert("pregunta bien");
            break;
    }

    fruta = (prompt("1 Pera\n 2 Manzana \n 3 Limón \n Salir"));
}

alert("El total a pagar es: " + totalFruta + "€")