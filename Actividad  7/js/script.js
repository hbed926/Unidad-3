function Comprobar() {
let nota;
nota = parseInt(document.getElementById("nota").value);
    if((nota<=10) && (nota >= 0)) {
        if(nota>=5) {
            document.getElementById("texto").innerHTML = "Aprobado";
        }
        else {
            document.getElementById("texto").innerHTML = "Suspenso";
        }
    }
    else {
        document.getElementById("texto").innerHTML = "Valor no válido";
    }
}