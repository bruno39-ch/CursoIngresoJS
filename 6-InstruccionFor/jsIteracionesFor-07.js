function mostrar()
{

	var numero;
	var cantidadNumeros=0;
	do{
		numero = parseInt(prompt("Ingrese un numero"));
	}while(isNaN(numero) || numero <= 1);

	for(var contador=0; contador <= numero;contador++){
		
		if(numero %contador == 0){
			document.write(contador+"<br>");
			cantidadNumeros++;
		}
	}
	document.write("cantidad de numeros divisores "+cantidadNumeros);

}//FIN DE LA FUNCIÓN