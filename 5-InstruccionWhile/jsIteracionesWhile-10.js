/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta=true;
	var numero;

	var sumaNegativos=0;
	var sumaPositivos=0;
	
	//PROMEDIOS
	var promedioPositivos;
	var promedioNegativos;

	//CONTADORES
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;

	while(respuesta)
	{
		do{
			numero = parseInt(prompt("Ingrese un numero"));
		}while(isNaN(numero));
		if(numero > 0){
			cantidadPositivos++;
			sumaPositivos += numero;
			if(numero %2==0){
				cantidadPares++;
			}
		}else{
			if(numero < 0){
				cantidadNegativos++;
				sumaNegativos += numero;
				if(numero %2==0){
					cantidadPares++;
				}
			}else{
				cantidadCeros++;
			}
		}

		respuesta=confirm("desea continuar?");
	}//fin del while
	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	document.write("la suma de positivos es :"+sumaPositivos);
	document.write("<br>la suma de negativos es :"+sumaNegativos);
	document.write("<br>la cantidad de positivos es :"+cantidadPositivos);
	document.write("<br>la cantidad de negativos es :"+cantidadNegativos);
	document.write("<br>la cantidad de ceros es :"+cantidadCeros);
	document.write("<br>la cantidad de pares es :"+cantidadPares);
	document.write("<br>promedio de positivos es :"+promedioPositivos);
	document.write("<br>promedio de negativos es :"+promedioNegativos);
}//FIN DE LA FUNCIÓN