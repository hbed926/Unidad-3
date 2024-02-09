function Comprobar() {
let numero;
numero = parseInt(document.getElementById("numero").value);
if((numero%2)==0) {
document.getElementById("texto").innerHTML = "Es par";
    }
    else {
   document.getElementById("texto").innerHTML = "Es impar";
    }
}