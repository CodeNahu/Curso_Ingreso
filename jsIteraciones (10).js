function mostrar()
{
var respuesta;
var acumuladorPositivo=0;
var acumuladorNegativo=0;
var cantidadPositivos=0;
var cantidadNegativos=0;
var cantidadCeros=0;
var cantidadPares=0;
var cantidadImpares=0;
var maximos;
var minimos;
var numero;
var esPrimeraIteracion=true;

do
      {
        numero=prompt("Ingrese un numero");
        numero=parseint(numero);
        if(numero != 0) //lo que no son ceros
          {
            if (numero > 0) //pregunto por positivos
              {
                acumuladorPositivo= acumuladorPositivo + numero;
                cantidadPositivos = cantidadPositivos + 1;
              }
          }
            else // pregunto por ceros (por descarte)
                {
                  acumuladorNegativo = acumuladorNegativo + numero;
                  cantidadNegativos = cantidadNegativos +1;
                }
            if (numero %2==0)// numeros pares.
                {
                  cantidadPares=cantidadPares+1;
                }
            else
              {
                cantidadImpares=cantidadImpares+1;
              }
            else
            {
              cantidadCeros++;
            }
            if(esPrimeraIteracion)
            {
              maximos=numero;
              minimos=numero;
              esPrimeraIteracion=false;
            }
            if (numero > maximos)
            {
              maximo = numero;
            }
            if (numero < minimo)
            {
              minimo = numero;
            }
        respuesta = confirm("¿Desea continuar?")
      }
    while(respuesta);







}//FIN DE LA FUNCIÓN
