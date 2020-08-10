/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750"){
		contador++;
		if(contador == 3){
			alert("Ya intento 3 veces");
			break;
		}
		claveIngresada = prompt("ingrese el número clave.");
	}
	
}//FIN DE LA FUNCIÓN
