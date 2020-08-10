function mostrar()
{
	var numero;
	var contadorDeNumeros=0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
	}while(isNaN(numero) || numero <= 1);

	for(var contador=1; contador <= numero; contador++){
		if(contador % 2==0){
			document.write(contador+"<br>");
			contadorDeNumeros++;
		}
	}
	document.write("Cantidad de numeros pares "+contadorDeNumeros);

}//FIN DE LA FUNCIÓN