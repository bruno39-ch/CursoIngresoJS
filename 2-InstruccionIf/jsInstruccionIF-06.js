function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	if(edad > 17 && !isNaN(edad)){
		alert("Mayor de edad");
	}else if(edad > 12 && !isNaN(edad)){
		alert("Es adolecente");
	}else{
		alert("Es niño");
	}

}//FIN DE LA FUNCIÓN