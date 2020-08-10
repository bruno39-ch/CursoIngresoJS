/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numero;
	var suma=0;
	var respuesta = true;
	contador=0;
	

	while(respuesta){
		numero = parseInt(prompt("Ingrese un numero"));
		if(!isNaN(numero)){
			suma = suma + numero;
			contador++;
		}
		respuesta = confirm("Desea continuar?");
	}

	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador;

}//FIN DE LA FUNCIÓN