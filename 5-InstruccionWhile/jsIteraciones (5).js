function mostrar()
{
var sexo = prompt("ingrese f ó m .");
document.getElementById('Sexo').value=sexo;
sexo= sexo.toLocaleLowerCase();

while (sexo !=("f") && sexo !=("m"))
  {
    sexo = prompt("Error. No es un sexo válido");
  }
}
//FIN DE LA FUNCIÓN
