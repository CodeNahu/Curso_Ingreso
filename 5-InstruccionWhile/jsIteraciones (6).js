function mostrar()
{
	var contadorIteraciones=0;
  var acumulador=0;
  var numero;

  while (contadorIteraciones<5)
  {
    numero = prompt("ingrese un numero");
    numero= parseInt(numero);
    acumulador = acumulador + numero;
    contadorIteraciones++;
  }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
