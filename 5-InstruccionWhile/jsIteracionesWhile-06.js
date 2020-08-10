function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	numeroIngresado = parseInt(numeroIngresado);
	acumulador = parseInt(acumulador);

	while(contador < 5 ){
		contador++;

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if(isNaN(numeroIngresado)){
			continue;
		}
		acumulador = acumulador + numeroIngresado;

	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN