
function prueba() {
  let a, b;
  a = parseInt(document.getElementById("numero1").value, 10);
  b = parseInt(document.getElementById("numero2").value, 10);
  c = a + b;
  d = a - b;
  e = a * b;
  f = a / b;
  g = a % b;
  document.getElementById("texto").innerHTML = "El primer número es: " + a + "<br>El segundo número es:" + b + "<br>La suma es:" + c + "<br>La resta es:" + d + "<br>El producto es:" + e + "<br>La división es:" + f + "<br>El resto es:" + g ;
}