function mostrar()
{

	var numero;
	var primo=true;
	do{
		numero = parseInt(prompt("Ingrese un numero"));
	}while(isNaN(numero) || numero < 0);

	for(var contador=0; contador < numero;contador++){
		if(numero % 2 == 0 || numero % 3 ==0){
			primo = false;
		}
	}
	if(primo || numero < 4){
		document.write("Es primo");
	}else{
		document.write("No es primo");
	}
}//FIN DE LA FUNCIÓN