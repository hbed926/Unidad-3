  function factorial() {
    let  resultado, iteracion, numero;
    resultado = 1;
    iteracion = 1;
    numero = parseInt(document.getElementById("numero").value, 10);
    while ( iteracion < numero) {
         iteracion = iteracion + 1;
         resultado = resultado * iteracion;
    
    }

    document.getElementById("texto").innerHTML = "El factorial del "  + numero + " es "  + resultado;
    
  }
