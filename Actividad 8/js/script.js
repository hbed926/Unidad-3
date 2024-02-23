function mensajeIF() {

    let Hora = parseInt(document.getElementById("Hora").value, 10);
    if (Hora >= 0 && Hora <= 24) {

        if (Hora >= 21 || Hora < 7) {
        document.getElementById("Texto").innerHTML = "Buenas noches.";
        }
        if (Hora >= 12 && Hora <= 21) {
        document.getElementById("Texto").innerHTML = "Buenas tardes.";
        }
        if (Hora >= 7 && Hora <= 11) {
        document.getElementById("Texto").innerHTML = "Buenos días.";
        }
    } 
    
    else {
    document.getElementById("Texto").innerHTML = "El valor introducido no es válido.";
    }
}

function mensajeSwitch() {
    let Hora = parseInt(document.getElementById("Hora").value, 10);
    switch (Hora) {
        case 21:
        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        document.getElementById("Texto").innerHTML = "Buenas noches.";
        break;
      
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        document.getElementById("Texto").innerHTML = "Buenos días.";
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        document.getElementById("Texto").innerHTML = "Buenas tardes.";
        break;
       
        default:
        document.getElementById("Texto").innerHTML = "El valor introducido no es válido.";
        break;
    }
}