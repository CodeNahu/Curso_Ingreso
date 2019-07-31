function mostrar()
{
  var contador=0;
  var numero;

  var productoNegativos;
  var contadornegativo=1;
  var acumuladorNegativos;
  var restultadoNegativos;

  var sumaPositivos;
  var contadorpositivo=0;
  var acumuladorPositivo;
  var resultadoPositivos;

  var respuesta;

do
    {
      if (numero >= 0)
      {
      numero = prompt("ingrese un número.");
      numero=parseInt(numero);
      acumuladorPositivo += numero;
      respuesta= confirm("¿ingresa otro?");
      resultadoPositivos=acumuladorPositivo+numero;
      }
      else
      {
        numero = prompt("ingrese un número.");
        numero=parseInt(numero);
        acumuladorNegativos*=numero;
        respuesta= confirm("¿ingresa otro?");
        restultadoNegativos=acumuladorNegativos*numero;
      }
    }
    while(isNaN(prompt("ingrese un número válido")));


document.getElementById('suma').value=resultadoPositivos;
document.write('resultados  Positivos:  ')+resultadoPositivos;
document.getElementById('producto').value=restultadoNegativos;
document.write('resultados  Negativos:  ')+restultadoNegativos;
}//FIN DE LA FUNCIÓN
