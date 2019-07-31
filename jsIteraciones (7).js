function mostrar()
{
	var contador=0;
  var acumulador=0;
  var numero;
	var respuesta;

     do
     {
        numero = prompt("Ingrese un numero.");
        numero = parseInt(numero);
        acumulador+=numero;

        contador++;
        respuesta = prompt("Presione S para continuar");

        while(respuesta.toUpperCase()!='s' && respuesta.toUpperCase() !='n')
        {
          respuesta=prompt("Error. ingrese S para continuar o N para detener.")
        }
      }
          while(respuesta=='S' || respuesta=='s');

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
