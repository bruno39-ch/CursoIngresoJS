/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	var numero;
	
	do{

		numero = parseInt(prompt("Ingrese un numero"));
		if(!isNaN(numero)){
			if(numero > 0){
				sumaPositivos += numero;
			}else{
				multiplicacionNegativos *= numero;
			}
		}
		respuesta = confirm("Desea continuar?");
	}while(respuesta);

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN